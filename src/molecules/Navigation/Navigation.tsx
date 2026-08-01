import { useEffect, useState } from "react";
import { useMediaQuery } from "../../config/hooks/useMediaQuery";
import { Link } from "../../atoms/components/link/Link";
import { clsx } from "../../atoms/helpers/clsx";
import "./Navigation.scss";
import { useNavigation } from "../../config/hooks/useNavigation";

export function Navigation() {
  const { navigationList } = useNavigation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);

  const [prevIsMobile, setPrevIsMobile] = useState(isMobile);
  if (isMobile !== prevIsMobile) {
    setPrevIsMobile(isMobile);
    if (!isMobile) setIsOpen(false);
  }

  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobile, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <nav className="nav" role="navigation">
      {isMobile && (
        <button
          type="button"
          className={`nav__burger ${isOpen ? "nav__burger--open" : ""}`}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
          aria-controls="nav-list"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      )}

      <ul
        id="nav-list"
        className={clsx(
          "nav__list",
          isMobile && "nav__list--mobile",
          isMobile && isOpen && "nav__list--open",
        )}
      >
        {navigationList.map(({ id, href, text }) => (
          <li key={id} className="nav__item">
            <Link
              className="nav__link"
              href={href}
              text={text}
              variant="casual"
              onClick={() => setIsOpen(false)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
