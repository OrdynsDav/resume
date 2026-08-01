import type { HTMLAttributes } from "react";
import type { TextProps } from "../../types/inertfaces";
import "./Text.scss";
import { clsx } from "../../helpers/clsx";

export function Text({
  text,
  className,
  variant = "primary",
  tag: Tag = "p",
  ...props
}: TextProps & HTMLAttributes<HTMLElement>) {
  return (
    <Tag
      className={clsx(
        "text",
        `text--${variant}`,
        Tag.startsWith("h") && "text--heading",
        className,
      )}
      {...props}
    >
      {text}
    </Tag>
  );
}
