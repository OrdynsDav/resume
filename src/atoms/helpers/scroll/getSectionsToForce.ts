import { sectionIds } from "../../../config/navigation.config";

export function getSectionsToForce(id: string): readonly string[] {
  const targetIndex = sectionIds.indexOf(id as (typeof sectionIds)[number]);
  return targetIndex === -1 ? [...sectionIds] : sectionIds.slice(0, targetIndex + 1);
}
