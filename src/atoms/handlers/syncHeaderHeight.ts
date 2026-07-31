export function syncHeaderHeight() {
  const header = document.querySelector<HTMLElement>(".header");
  if (!header) return;

  const height = header.getBoundingClientRect().height;
  document.documentElement.style.setProperty("--header-height", `${height}px`);
}

export function observeHeaderHeight() {
  syncHeaderHeight();
  window.addEventListener("resize", syncHeaderHeight, { passive: true });

  return () => {
    window.removeEventListener("resize", syncHeaderHeight);
  };
}
