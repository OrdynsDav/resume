import { SKELETON_CLASS } from "./scroll.constants";

export function isSectionContentReady(sectionId: string): boolean {
  const root = document.getElementById(sectionId);
  if (!root) return false;

  const section = root.querySelector(".section");
  return Boolean(section && !section.classList.contains(SKELETON_CLASS));
}
