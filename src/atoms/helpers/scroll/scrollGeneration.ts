let scrollGeneration = 0;

export function nextScrollGeneration(): number {
  scrollGeneration += 1;
  return scrollGeneration;
}

export function isCurrentScrollGeneration(generation: number): boolean {
  return generation === scrollGeneration;
}
