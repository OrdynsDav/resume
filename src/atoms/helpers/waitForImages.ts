export function waitForImages(selectors: string[]): Promise<void> {
  const images = selectors.flatMap((selector) =>
    Array.from(document.querySelectorAll<HTMLImageElement>(selector)),
  );

  if (images.length === 0) return Promise.resolve();

  return Promise.all(
    images.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) {
            resolve();
            return;
          }

          img.addEventListener("load", () => resolve(), { once: true });
          img.addEventListener("error", () => resolve(), { once: true });
        }),
    ),
  ).then(() => undefined);
}
