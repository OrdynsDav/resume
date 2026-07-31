import { CORRECTION_DELAYS_MS } from "./scroll.constants";
import { needsScrollCorrection } from "./needsScrollCorrection";
import { isCurrentScrollGeneration } from "./scrollGeneration";
import { scrollToElement } from "./scrollToElement";

export function scheduleScrollCorrections(id: string, generation: number) {
  CORRECTION_DELAYS_MS.forEach((delay) => {
    window.setTimeout(() => {
      if (!isCurrentScrollGeneration(generation)) return;
      if (!needsScrollCorrection(id)) return;
      scrollToElement(id, generation);
    }, delay);
  });
}
