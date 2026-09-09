/**
 * Marketing attribution capture for the registration form's Zoho relay.
 *
 * Zoho's own /records endpoint validates strictly against the target form's
 * exact field schema — sending ANY key the form doesn't define (utm_source,
 * gclid, etc.) rejects the ENTIRE submission with a 400, it does not just
 * drop the extra key (confirmed by testing the live endpoint). This form
 * currently has no dedicated utm/gclid/fbclid fields, only a free-text
 * REFERRER_NAME. Until the Zoho Forms admin adds real fields for these,
 * everything captured here rides along packed into that one field instead
 * of being split into separate Lead columns — see api/zoho-lead.js.
 */

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const CLICK_ID_KEYS = ["gclid", "fbclid"] as const;
const FIRST_TOUCH_STORAGE_KEY = "nri_first_touch_attribution_v1";

type ParamSnapshot = Record<(typeof UTM_KEYS)[number] | (typeof CLICK_ID_KEYS)[number], string>;

export interface AttributionSnapshot {
  current_url: string;
  referrer_url: string;
  landing_page_url: string;
  current_utm_source: string;
  current_utm_medium: string;
  current_utm_campaign: string;
  current_utm_term: string;
  current_utm_content: string;
  current_gclid: string;
  current_fbclid: string;
  first_touch_utm_source: string;
  first_touch_utm_medium: string;
  first_touch_utm_campaign: string;
  first_touch_utm_term: string;
  first_touch_utm_content: string;
  first_touch_gclid: string;
  first_touch_fbclid: string;
}

function readParams(url: string): ParamSnapshot {
  const params = new URL(url).searchParams;
  const out = {} as ParamSnapshot;
  for (const key of [...UTM_KEYS, ...CLICK_ID_KEYS]) {
    out[key] = params.get(key) || "";
  }
  return out;
}

/**
 * Records this session's very first landing URL + its campaign tags the
 * first time it's called, then returns that same snapshot on every later
 * call — including after internal navigation strips the query string.
 * Call this once, early, on app mount (see App.tsx) so it captures the
 * actual entry page rather than whatever page happens to open the form.
 */
export function captureFirstTouch(): void {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(FIRST_TOUCH_STORAGE_KEY)) return;
    const url = window.location.href;
    sessionStorage.setItem(FIRST_TOUCH_STORAGE_KEY, JSON.stringify({ url, ...readParams(url) }));
  } catch {
    // Storage can throw in private-browsing/blocked-storage contexts —
    // attribution is a nice-to-have, never worth failing the page over.
  }
}

function getFirstTouch(): { url: string } & ParamSnapshot {
  const currentUrl = window.location.href;
  try {
    const stored = sessionStorage.getItem(FIRST_TOUCH_STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // fall through to treating "now" as first touch
  }
  return { url: currentUrl, ...readParams(currentUrl) };
}

export function getAttributionSnapshot(): AttributionSnapshot {
  const currentUrl = window.location.href;
  const current = readParams(currentUrl);
  const firstTouch = getFirstTouch();

  return {
    current_url: currentUrl,
    referrer_url: document.referrer || "",
    landing_page_url: firstTouch.url,
    current_utm_source: current.utm_source,
    current_utm_medium: current.utm_medium,
    current_utm_campaign: current.utm_campaign,
    current_utm_term: current.utm_term,
    current_utm_content: current.utm_content,
    current_gclid: current.gclid,
    current_fbclid: current.fbclid,
    first_touch_utm_source: firstTouch.utm_source,
    first_touch_utm_medium: firstTouch.utm_medium,
    first_touch_utm_campaign: firstTouch.utm_campaign,
    first_touch_utm_term: firstTouch.utm_term,
    first_touch_utm_content: firstTouch.utm_content,
    first_touch_gclid: firstTouch.gclid,
    first_touch_fbclid: firstTouch.fbclid,
  };
}
