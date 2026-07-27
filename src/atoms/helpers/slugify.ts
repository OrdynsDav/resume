export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\wа-яё\s-]/g, "")
    .replace(/\s+/g, "-");
}
