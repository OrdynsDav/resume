import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@splidejs/react-splide/css";
import "./lib/splidejs/splideCutsomStyles.scss";
import "./index.scss";
import App from "./App.tsx";

import { capturePendingHash } from "./atoms/handlers/pendingHash";

capturePendingHash();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
