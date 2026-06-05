export function staggerDelay(index: number, base = 80, max = 480) {
  return Math.min(index * base, max);
}
