import type { JSX } from "react/jsx-runtime";

export type LinkVariants = "primary" | "secondary" | "light" | "casual";

// TextProps
export type TextVariants = "primary" | "secondary";
export type TextTag = keyof Pick<
  JSX.IntrinsicElements,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label"
>;
