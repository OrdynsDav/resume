import { waitForImages } from "../waitForImages";
import { waitFrames } from "../waitFrames";
import { isSectionContentReady } from "./isSectionContentReady";
import { MAX_FRAMES, STABLE_FRAMES_REQUIRED } from "./scroll.constants";
import { isCurrentScrollGeneration } from "./scrollGeneration";
import { scheduleScrollCorrections } from "./scheduleScrollCorrections";
import { scrollToElement } from "./scrollToElement";

export async function scrollWhenReady(
  id: string,
  idsToForce: readonly string[],
  generation: number,
): Promise<void> {
  let totalFrames = 0;

  while (isCurrentScrollGeneration(generation) && totalFrames < MAX_FRAMES) {
    if (!idsToForce.every(isSectionContentReady)) {
      await waitFrames(1);
      totalFrames += 1;
      continue;
    }

    await waitForImages([".hero img", ...idsToForce.map((sectionId) => `#${sectionId} img`)]);

    let stableFrames = 0;
    let lastHeight = -1;

    while (
      isCurrentScrollGeneration(generation) &&
      stableFrames < STABLE_FRAMES_REQUIRED &&
      totalFrames < MAX_FRAMES
    ) {
      const height = document.documentElement.scrollHeight;
      stableFrames = height === lastHeight ? stableFrames + 1 : 0;
      lastHeight = height;
      totalFrames += 1;
      await waitFrames(1);
    }

    if (!isCurrentScrollGeneration(generation)) return;

    scrollToElement(id, generation);
    scheduleScrollCorrections(id, generation);
    return;
  }

  if (isCurrentScrollGeneration(generation)) {
    scrollToElement(id, generation);
    scheduleScrollCorrections(id, generation);
  }
}
