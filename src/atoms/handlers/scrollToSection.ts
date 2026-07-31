import { getSectionsToForce } from "../helpers/scroll/getSectionsToForce";
import type { ScrollToSectionOptions } from "../helpers/scroll/scroll.constants";
import { nextScrollGeneration } from "../helpers/scroll/scrollGeneration";
import { scrollWhenReady } from "../helpers/scroll/scrollWhenReady";

export function scrollToSection(
  id: string,
  { updateHash = true, resetScroll = false }: ScrollToSectionOptions = {},
) {
  const generation = nextScrollGeneration();

  if (resetScroll) {
    window.scrollTo(0, 0);
  }

  const idsToForce = getSectionsToForce(id);

  idsToForce.forEach((sectionId) => {
    window.dispatchEvent(new CustomEvent("force-visible", { detail: sectionId }));
  });

  if (updateHash) {
    history.replaceState(null, "", `#${id}`);
  }

  void scrollWhenReady(id, idsToForce, generation);
}
