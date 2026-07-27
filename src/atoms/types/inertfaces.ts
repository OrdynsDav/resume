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
