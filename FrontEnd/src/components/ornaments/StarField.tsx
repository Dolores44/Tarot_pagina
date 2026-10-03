type Props = {
  /** Semilla distinta por sección para que no se repita el mismo cielo */
  seed?: number;
  /** Estrellas por mosaico de 1000×1000 px */
  count?: number;
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

const TILE = 1000;

/**
 * Campo de estrellas estático en SVG (sin canvas ni JS en el cliente).
 *
 * Geometría fija en píxeles: un mosaico de 1000×1000 px que se repite con
 * <pattern>, anclado arriba a la izquierda. El SVG no tiene viewBox, así que
 * NO se escala con su contenedor: si la sección crece (ej. al abrir un
 * acordeón) solo se descubre más cielo; las estrellas no se estiran ni se mueven.
 */
export function StarField({ seed = 1, count = 70, className }: Props) {
  const rand = mulberry32(seed);
  const patternId = `stars-${seed}-${count}`;

  const dots = Array.from({ length: count }, () => ({
    cx: round(rand() * TILE),
    cy: round(rand() * TILE),
    r: round(0.6 + rand() * 1.3),
    opacity: round(0.25 + rand() * 0.5),
    warm: rand() > 0.8,
  }));

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className ?? ""}`}
    >
      <defs>
        <pattern id={patternId} width={TILE} height={TILE} patternUnits="userSpaceOnUse">
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
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
