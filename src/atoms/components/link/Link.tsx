import type { AnchorHTMLAttributes } from "react";
import type { LinkProps } from "../../types/inertfaces";
import { Text } from "../text/Text";
import "./Link.css";
import { clsx } from "../../helpers/clsx";

export function Link({
  href,
  text,
  iconLeft,
  iconRight,
  className,
  variant = "primary",
  ...props
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={clsx(
        "link",
        `link--${variant}`,
        className ?? ""
      )}
      href={href}
      {...[props]}
    >
      {iconLeft && <span className="link__icon">{iconLeft}</span>}
      {text && <Text text={text} />}
      {iconRight && <span className="link__icon">{iconRight}</span>}
    </a>
  );
}
