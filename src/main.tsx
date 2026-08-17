import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Every route is pre-rendered at build time, so the container normally already
// holds server-generated markup and we hydrate it. `createRoot` is the fallback
// for the dev server, where nothing has been pre-rendered.
if (container.hasChildNodes()) {
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
