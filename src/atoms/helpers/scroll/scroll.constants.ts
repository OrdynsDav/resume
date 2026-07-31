export const SKELETON_CLASS = "about-skeleton";
export const STABLE_FRAMES_REQUIRED = 5;
export const MAX_FRAMES = 180;
export const SCROLL_TOLERANCE_PX = 8;
export const CORRECTION_DELAYS_MS = [120, 350] as const;
export const SCROLL_GAP_PX = 16;
export const DEFAULT_HEADER_HEIGHT_PX = 72;

export type ScrollToSectionOptions = {
  updateHash?: boolean;
  resetScroll?: boolean;
};
