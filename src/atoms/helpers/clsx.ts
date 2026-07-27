export const clsx = (...parts: (string | false | null | undefined)[]) =>
  parts.filter(Boolean).join(" ");
