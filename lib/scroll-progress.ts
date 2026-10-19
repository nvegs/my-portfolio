export function getScrollProgress(): number {
  const docHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  if (docHeight <= 0) return 0;
  return Math.min(1, Math.max(0, window.scrollY / docHeight));
}
