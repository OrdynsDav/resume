import type { CSSProperties } from "react";
import type { SkeletonProps } from "../../types/inertfaces";
import "./Skeleton.scss";

export function Skeleton({
  variant = "text",
  width,
  height,
  animation = "wave",
  style,
  className = "",
}: SkeletonProps) {
  const base: CSSProperties = {
    display: "block",
    backgroundColor: "var(--panel-border)",
    maxWidth: width ?? (variant === "text" ? "100%" : undefined),
    height: height ?? (variant === "text" ? "1.2em" : undefined),
    width: "100%",
  };

  const variantStyle: CSSProperties =
    variant === "circular"
      ? { borderRadius: "50%" }
      : variant === "rectangular"
        ? { borderRadius: 8 }
        : { borderRadius: 4, transform: "scale(1, 0.6)", transformOrigin: "0 55%" };

  return (
    <span
      className={`skeleton ${animation ? `skeleton--${animation}` : ""} ${className}`}
      style={{ ...base, ...variantStyle, ...style }}
    />
  );
}
