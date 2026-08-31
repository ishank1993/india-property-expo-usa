#!/usr/bin/env node
// Best-effort prerendering pass, run after `vite build`.
//
// Vite ships a pure client-rendered SPA — the raw HTML is an empty
// <div id="root">. This script boots the already-built dist/ behind a
// tiny local static server, visits every real route in a headless
// browser, waits for the app to paint, and writes the resulting HTML
// into dist/<route>/index.html so crawlers and social scrapers get real
// content without needing to execute JavaScript.
//
// This step is intentionally isolated from `vite build` and wrapped in a
// top-level try/catch: if headless Chrome can't launch in a given build
// environment for any reason, we log a warning and exit 0 rather than
// fail the deploy. A plain, fully working client-rendered dist/ (exactly
// what shipped before this script existed) must always go out.

import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const PORT = 4321;
const SITE_URL = "https://indiapropertyexpobahrain.com";

// Keep in sync with the slugs in src/app/content/blogPosts.ts.
const blogSlugs = [
  "buying-property-india-from-bahrain-nri-guide",
  "gift-city-vs-real-estate-bahrain-nri",
  "nri-property-tax-filing-bahrain",
  "best-bangalore-projects-nri-investment-bahrain",
  "pune-vs-hyderabad-property-investment-nri-bahrain",
  "luxury-real-estate-mumbai-gurgaon-nri-bahrain",
];

// Analytics/tag hosts that must never load while prerendering.
// Matches <script src="..."> elements pointing at a blocked analytics host.
const INJECTED_TAG_TAG =
  /<script\b[^>]*\bsrc="[^"]*(?:googletagmanager\.com|google-analytics\.com|analytics\.google\.com|doubleclick\.net|connect\.facebook\.net)[^"]*"[^>]*>\s*<\/script>/gi;

const BLOCKED_HOSTS =
  /googletagmanager\.com|google-analytics\.com|analytics\.google\.com|doubleclick\.net|connect\.facebook\.net|facebook\.com\/tr/i;

const routes = [
  "/",
  "/wealth",
  "/terms",
  "/privacy",
  "/privacy-policy",
  "/disclaimer",
  "/blog",
  ...blogSlugs.map((slug) => `/blog/${slug}`),
];

const MIME = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".webmanifest": "application/manifest+json",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

function serveStatic() {
  return createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    let filePath = path.join(distDir, urlPath);
    if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
      // Same SPA fallback as vercel.json's rewrite rule.
      filePath = path.join(distDir, "index.html");
    }
    const ext = path.extname(filePath);
    res.setHeader("Content-Type", MIME[ext] || "application/octet-stream");
    createReadStream(filePath).pipe(res);
  });
}

async function getLaunchOptions() {
  if (process.platform !== "linux") {
    // Local dev / non-Linux CI: puppeteer's own downloaded Chrome works fine.
    return { args: ["--no-sandbox", "--disable-setuid-sandbox"] };
  }
  // Vercel's build container (and most minimal Linux CI images) is missing
  // shared libraries puppeteer's bundled Chrome needs (libnspr4.so and
  // friends). @sparticuz/chromium ships a Chromium build made for exactly
  // this kind of restricted serverless/CI Linux environment.
  const chromium = (await import("@sparticuz/chromium")).default;
  return {
    executablePath: await chromium.executablePath(),
    args: chromium.args,
  };
}

async function run() {
  if (!existsSync(distDir)) {
    throw new Error("dist/ not found — run `vite build` first.");
  }

  const { default: puppeteer } = await import("puppeteer");
  const launchOptions = await getLaunchOptions();

  const server = serveStatic();
  await new Promise((resolve) => server.listen(PORT, "127.0.0.1", resolve));

  const browser = await puppeteer.launch({ headless: true, ...launchOptions });

  try {
    for (const route of routes) {
      const page = await browser.newPage();
      try {
        // Block analytics during prerendering. Without this, every build
        // fires a pageview per route into the live GTM container, and the
        // saved HTML captures the tags GTM injects into the DOM — which
        // then run a second time for real visitors, double-counting them.
        await page.setRequestInterception(true);
        page.on("request", (req) => {
          if (BLOCKED_HOSTS.test(req.url())) {
            req.abort().catch(() => {});
            return;
          }
          req.continue().catch(() => {});
        });

        await page.goto(`http://127.0.0.1:${PORT}${route}`, {
          waitUntil: "domcontentloaded",
          timeout: 30000,
        });
        await page
          .waitForFunction("window.__PRERENDERED__ === true", { timeout: 15000 })
          .catch(() => {
            console.warn(`[prerender] ${route}: render signal timed out, using content as-is`);
          });
        // Small buffer for any trailing synchronous DOM writes.
        await new Promise((resolve) => setTimeout(resolve, 200));

        let html = await page.content();
        html = html
          .replace(/https?:\/\/(localhost|127\.0\.0\.1):\d+/gi, SITE_URL)
          .replace(/domain=(localhost|127\.0\.0\.1)(%3A\d+|:\d+)?/gi, "domain=indiapropertyexpobahrain.com")
          // Blocking the request stops the download, but the GTM snippet still
          // inserts its <script> element into the DOM before that — and
          // page.content() captures it. Left in, real visitors would load
          // gtm.js twice (baked-in tag + the snippet inserting another).
          // The inline snippet itself has no src and is deliberately kept.
          .replace(INJECTED_TAG_TAG, "");

        const outDir = route === "/" ? distDir : path.join(distDir, route);
        await mkdir(outDir, { recursive: true });
        await writeFile(path.join(outDir, "index.html"), html, "utf-8");
        console.log(`[prerender] wrote ${route}`);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

run()
  .then(() => {
    console.log("[prerender] done — dist/ now contains static HTML for all routes.");
  })
  .catch((err) => {
    console.warn(
      "[prerender] Skipped — shipping the plain client-rendered dist/ instead. Reason:",
      err && err.message ? err.message : err,
    );
    process.exit(0);
  });
