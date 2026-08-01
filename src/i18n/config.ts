import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";

i18n
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    supportedLngs: ["en", "ru", "fr", "de"],
    nonExplicitSupportedLngs: true,
    ns: ["common", "hero"], // добавляем каждый namespace сюда по мере создания
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
