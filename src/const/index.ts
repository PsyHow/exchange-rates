function relDiff(current: number, prev: number): number {
  return ((current - prev) / prev) * 100;
}

export function currentDiffHandle(current: number, prev: number): string {
  return relDiff(current, prev).toFixed(2).includes('-')
    ? `${relDiff(current, prev).toFixed(2)} %`
    : `+${relDiff(current, prev).toFixed(2)} %`;
}
