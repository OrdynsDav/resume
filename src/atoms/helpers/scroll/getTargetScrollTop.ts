import { getScrollOffset } from "./getScrollOffset";

export function getTargetScrollTop(id: string): number | null {
  const root = document.getElementById(id);
  if (!root) return null;

  const target = (root.querySelector(".section-title-wrap") ?? root) as HTMLElement;
  return target.getBoundingClientRect().top + window.scrollY - getScrollOffset();
}
