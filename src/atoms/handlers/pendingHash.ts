const STORAGE_KEY = "pendingHash";

export function capturePendingHash(): string {
  const hash = window.location.hash.slice(1);
  if (!hash) return "";

  sessionStorage.setItem(STORAGE_KEY, hash);
  history.replaceState(null, "", window.location.pathname + window.location.search);
  return hash;
}

export function consumePendingHash(): string {
  const hash = sessionStorage.getItem(STORAGE_KEY) ?? "";
  sessionStorage.removeItem(STORAGE_KEY);
  return hash;
}
