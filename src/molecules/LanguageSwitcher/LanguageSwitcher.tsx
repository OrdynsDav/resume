import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import "./LanguageSwitcher.scss";
import { Text } from "../../atoms/components/text/Text";

const LANGUAGES = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
] as const;

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((lng) => lng.code === i18n.resolvedLanguage) ?? LANGUAGES[0];

  const handleChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        type="button"
        className="lang-switcher__trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {currentLang.label}
      </button>

      {isOpen && (
        <ul className="lang-switcher__list" role="listbox">
          {LANGUAGES.map((lng) => (
            <li key={lng.code}>
              <button
                type="button"
                className={`lang-switcher__option ${
                  lng.code === currentLang.code ? "is-active" : ""
                }`}
                onClick={() => handleChange(lng.code)}
                role="option"
                aria-selected={lng.code === currentLang.code}
              >
                <Text text={lng.label} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
