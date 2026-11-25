/** Stable hue (0–359) for a string, used to tint avatars and work tiles. */
export function hue(s: string): number {
  let h = 7;
  for (const c of s) h = (h * 31 + (c.codePointAt(0) ?? 0)) % 360;
  return h;
}

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0]!.toUpperCase())
    .slice(0, 2)
    .join('');
}
