import { getTargetScrollTop } from "./getTargetScrollTop";
import { isCurrentScrollGeneration } from "./scrollGeneration";

export function scrollToElement(id: string, generation: number) {
  if (!isCurrentScrollGeneration(generation)) return;

  const targetTop = getTargetScrollTop(id);
  if (targetTop === null) return;

  window.scrollTo({ top: Math.max(0, targetTop), behavior: "auto" });
}
