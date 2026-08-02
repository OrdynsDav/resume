import Typograf from "typograf";

const LOCALE_MAP: Record<string, string[]> = {
  ru: ["ru", "en-US"],
  en: ["en-US", "ru"],
  de: ["de", "en-US"],
  fr: ["fr", "en-US"],
};

const cache = new Map<string, Typograf>();

export function getTypograf(lang: string): Typograf {
  const key = lang in LOCALE_MAP ? lang : "en";

  let tp = cache.get(key);
  if (!tp) {
    tp = new Typograf({ locale: LOCALE_MAP[key] });
    cache.set(key, tp);
  }
  return tp;
}
