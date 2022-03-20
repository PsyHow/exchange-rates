export function relDiff(current: number, prev: number): string {
  const currencyTrend = current - prev;
  const result = `${currencyTrend > 0 ? '+' : '-'} ${Math.abs(currencyTrend)
    .toFixed(1)
    .replace('.', ',')} %`;
  return result;
}
