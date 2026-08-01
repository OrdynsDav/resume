import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "@splidejs/react-splide/css";
import "./lib/splidejs/splideCutsomStyles.scss";
import "./index.scss";
import App from "./App.tsx";
import { capturePendingHash } from "./atoms/handlers/pendingHash";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/config.ts";

capturePendingHash();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Suspense>
  </StrictMode>,
);
