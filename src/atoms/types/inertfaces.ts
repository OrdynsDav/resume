import type { ReactNode } from "react";
import type { HeadingLevel, LinkVariants, TextTag, TextVariants } from "./types";

export interface IconProps {
  width?: number;
  height?: number;
}

export interface LinkProps {
  href: string;
  text?: string;
  variant?: LinkVariants;
  className?: string;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
}

export interface TextProps {
  text: string;
  className?: string;
  variant?: TextVariants;
  tag?: TextTag;
}

export interface SectionProps {
  /** Видимый заголовок секции (опционально, но крайне желателен) */
  title?: string;
  /** Уровень заголовка — учитывай иерархию h1 → h6 на всей странице */
  headingLevel?: HeadingLevel;
  /** Если заголовка нет визуально, обязательно укажи aria-label */
  ariaLabel?: string;
  /** id для якорной навигации, генерируется из title, если не передан */
  id?: string;
  className?: string;
  orderNum?: string;
  children: ReactNode;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface StatProps {
  label: string;
  value: string;
}
