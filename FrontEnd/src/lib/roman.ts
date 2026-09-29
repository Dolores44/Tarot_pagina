const numerals: [number, string][] = [
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

/** 1 → "I", 14 → "XIV" (hasta 39, suficiente para numerar cartas) */
export function toRoman(value: number): string {
  let n = Math.max(1, Math.min(39, Math.floor(value)));
  let out = "";
  for (const [num, sym] of numerals) {
    while (n >= num) {
      out += sym;
      n -= num;
    }
  }
  return out;
}
