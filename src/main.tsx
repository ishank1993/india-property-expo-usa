
  import { createRoot } from "react-dom/client";
  import { BrowserRouter } from "react-router-dom";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Signal to the build-time prerenderer (scripts/prerender.mjs) that the
  // route has painted, including the meta tags/JSON-LD that SEOHead
  // injects in a useEffect after mount.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      (window as unknown as { __PRERENDERED__?: boolean }).__PRERENDERED__ = true;
    });
  });
