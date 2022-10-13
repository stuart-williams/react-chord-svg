export const times = <T = number>(n: number, cb: (i: number) => any): T[] =>
  Array(n)
    .fill(0)
    .map((_, i) => cb(i));
