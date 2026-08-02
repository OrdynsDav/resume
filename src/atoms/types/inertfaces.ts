import type { CSSProperties, ReactNode } from "react";
import type { LinkVariants, TextTag, TextVariants } from "./types";

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
  typograf?: boolean;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface StatProps {
  label: string;
  value: string;
}

export interface TagProps {
  text: string;
}

export interface LazySectionProps {
  id: string;
  children: ReactNode;
  rootMargin?: string;
  minHeight?: number;
  skeleton?: ReactNode;
}

export interface SkeletonProps {
  variant?: "text" | "circular" | "rectangular";
  width?: number | string;
  height?: number | string;
  animation?: "pulse" | "wave" | false;
  style?: CSSProperties;
  className?: string;
}
