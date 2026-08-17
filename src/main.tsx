import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Every route is pre-rendered at build time, so the container normally already
// holds server-generated markup and we hydrate it. `createRoot` is the fallback
// for the dev server, where nothing has been pre-rendered.
//
// The test looks for an element child specifically: the dev server serves
// index.html verbatim, so the container still holds the `<!--app-html-->`
// placeholder comment. That is a child node, and treating it as pre-rendered
// markup would make development hydrate against an empty container on every
// load - failing, falling back to a client render, and hiding real hydration
// mismatches behind the noise.
if (container.firstElementChild) {
  hydrateRoot(
    container,
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
