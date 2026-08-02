import type { HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import type { TextProps } from "../../types/inertfaces";
import "./Text.scss";
import { clsx } from "../../helpers/clsx";
import { getTypograf } from "../../../lib/typograf/typograf";

export function Text({
  text,
  className,
  variant = "primary",
  tag: Tag = "p",
  typograf = true,
  ...props
}: TextProps & HTMLAttributes<HTMLElement>) {
  const { i18n } = useTranslation();

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
      {typograf ? getTypograf(i18n.language).execute(text) : text}
    </Tag>
  );
}
