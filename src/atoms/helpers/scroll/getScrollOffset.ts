import { DEFAULT_HEADER_HEIGHT_PX, SCROLL_GAP_PX } from "./scroll.constants";

export function getScrollOffset(): number {
  const styles = getComputedStyle(document.documentElement);
  const headerHeight = Number.parseFloat(styles.getPropertyValue("--header-height"));
  const scrollGap = Number.parseFloat(styles.getPropertyValue("--scroll-gap")) || SCROLL_GAP_PX;

  if (Number.isFinite(headerHeight)) {
    return headerHeight + scrollGap;
  }

  const header = document.querySelector<HTMLElement>(".header");
  return (header?.getBoundingClientRect().height ?? DEFAULT_HEADER_HEIGHT_PX) + scrollGap;
}
