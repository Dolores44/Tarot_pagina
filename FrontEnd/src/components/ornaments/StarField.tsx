type Props = {
  /** Semilla distinta por sección para que no se repita el mismo cielo */
  seed?: number;
  count?: number;
  /** Estrellas de 4 puntas que titilan (pocas, a propósito) */
  sparkles?: number;
  className?: string;
};

/** PRNG determinístico: el mismo cielo en servidor y cliente, sin saltos. */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const round = (v: number) => Math.round(v * 10) / 10;

const SPARKLE_PATH =
  "M0 -1C.06 -.3 .3 -.06 1 0 .3 .06 .06 .3 0 1-.06 .3-.3 .06-1 0-.3-.06-.06-.3 0-1Z";

/**
 * Campo de estrellas estático en SVG (sin canvas ni JS en el cliente).
 * Solo unas pocas estrellas titilan, con CSS.
 */
export function StarField({ seed = 1, count = 70, sparkles = 6, className }: Props) {
  const rand = mulberry32(seed);

  const dots = Array.from({ length: count }, () => ({
    cx: round(rand() * 1000),
    cy: round(rand() * 1000),
    r: round(0.6 + rand() * 1.3),
    opacity: round(0.25 + rand() * 0.5),
    warm: rand() > 0.8,
  }));

  // Las estrellas grandes van en las bandas laterales para no tapar texto ni botones
  const stars = Array.from({ length: sparkles }, () => ({
    x: round(rand() < 0.5 ? 30 + rand() * 230 : 740 + rand() * 230),
    y: round(40 + rand() * 920),
    size: round(3 + rand() * 3.5),
    delay: round(rand() * 6),
    warm: rand() > 0.5,
  }));

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className ?? ""}`}
    >
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          opacity={d.opacity}
          fill={d.warm ? "var(--color-rose)" : "var(--color-lilac)"}
        />
      ))}
      {stars.map((s, i) => (
        <path
          key={i}
          d={SPARKLE_PATH}
          transform={`translate(${s.x} ${s.y}) scale(${s.size})`}
          fill={s.warm ? "var(--color-champagne)" : "var(--color-lilac)"}
          className="animate-twinkle"
          style={{ animationDelay: `${s.delay}s` }}
        />
      ))}
    </svg>
  );
}
