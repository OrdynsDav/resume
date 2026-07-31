export function waitFrames(count: number): Promise<void> {
  return new Promise((resolve) => {
    let remaining = count;

    const step = () => {
      remaining -= 1;
      if (remaining <= 0) {
        resolve();
        return;
      }
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  });
}
