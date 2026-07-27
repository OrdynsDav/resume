import type { ReactNode } from "react";
import type { HeadingLevel } from "./types";
import type { TagProps } from "../../atoms/types/inertfaces";

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

export interface ProjectProps {
  orderNum: string;
  title: string;
  description: string;
  tags: TagProps[];
  reposHref: string;
}
