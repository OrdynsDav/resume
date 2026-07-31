import { getTargetScrollTop } from "./getTargetScrollTop";
import { SCROLL_TOLERANCE_PX } from "./scroll.constants";

export function needsScrollCorrection(id: string): boolean {
  const targetTop = getTargetScrollTop(id);
  if (targetTop === null) return false;

  return window.scrollY < targetTop - SCROLL_TOLERANCE_PX;
}
