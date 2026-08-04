
  import { createRoot } from "react-dom/client";
  import { BrowserRouter } from "react-router-dom";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Signal to the build-time prerenderer (see vite.config.ts) that the
  // route has painted, including the meta tags/JSON-LD that SEOHead
  // injects in a useEffect after mount.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.dispatchEvent(new Event("render-event"));
    });
  });
