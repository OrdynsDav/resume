import type { AnchorHTMLAttributes, MouseEvent } from "react";
import type { LinkProps } from "../../types/inertfaces";
import { Text } from "../text/Text";
import "./Link.css";
import { clsx } from "../../helpers/clsx";
import { scrollToSection } from "../../handlers/scrollToSection";

export function Link({
  href,
  text,
  iconLeft,
  iconRight,
  className,
  variant = "primary",
  onClick,
  ...props
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      scrollToSection(href.slice(1));
    }
    onClick?.(event);
  };

  return (
    <a
      className={clsx("link", `link--${variant}`, className ?? "")}
      href={href}
      onClick={handleClick}
      {...props}
    >
      {iconLeft && <span className="link__icon">{iconLeft}</span>}
      {text && <Text text={text} />}
      {iconRight && <span className="link__icon">{iconRight}</span>}
    </a>
  );
}
