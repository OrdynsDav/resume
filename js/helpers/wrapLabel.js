export const wrapLabel = (str, maxChars = 18) => {
  const words = String(str).split(" ");
  const lines = [];
  let line = "";
  words.forEach((w) => {
    if ((line + " " + w).trim().length <= maxChars) {
      line = (line + " " + w).trim();
    } else {
      if (line) lines.push(line);
      line = w;
    }
  });
  if (line) lines.push(line);
  return lines;
};
