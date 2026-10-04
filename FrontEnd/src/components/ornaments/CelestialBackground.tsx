import type { CSSProperties } from "react";
import { StarField } from "@/components/ornaments/StarField";

type Density = "low" | "normal" | "high";

type Props = {
  /** Semilla distinta por sección: cada cielo es diferente pero estable (sin saltos al hidratar) */
  seed?: number;
  density?: Density;
  /** Cantidad de constelaciones (líneas finas, solo como detalle) */
  constellations?: 0 | 1 | 2;
  /** Nebulosa extra muy sutil (ej. fucsia para Amor en Conexión) */
  nebula?: "fuchsia";
  /**
   * Alto (px) en el que se reparten los elementos animados, medido desde arriba.
   * Las posiciones son en px y no en % del alto: si la sección crece
   * (ej. al abrir un acordeón) el cielo no se desplaza ni se estira.
   */
  spread?: number;
  className?: string;
};

/**
 * Cielo nocturno vivo y liviano:
 * - Base: puntos estáticos en un solo SVG con mosaico fijo en px (no se repinta ni se escala).
 * - Geometría anclada arriba: el alto de la sección no afecta a las posiciones.
 * - Encima, pocos elementos animados con transform/opacity:
 *   estrellas que titilan, estrellas que derivan lento, órbitas y constelaciones que "respiran".
 * - En mobile se muestran menos elementos animados.
 * - Fuera de pantalla las animaciones se pausan (data-active, ver RevealObserver).
 * - Con prefers-reduced-motion queda estático.
 */

const COUNTS: Record<Density, { dots: number; twinkles: number; drifters: number; orbits: number }> = {
  low: { dots: 40, twinkles: 4, drifters: 3, orbits: 1 },
  normal: { dots: 60, twinkles: 6, drifters: 4, orbits: 2 },
  high: { dots: 85, twinkles: 8, drifters: 5, orbits: 3 },
};

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

const r1 = (v: number) => Math.round(v * 10) / 10;

/*
 * Reloj común de las animaciones del cielo (ver globals.css): los valores cambian
 * 30 veces por segundo, todos en los mismos instantes, en vez de en cada refresco
 * del monitor. Para que caigan en múltiplos de 1/30 s:
 * - las duraciones se redondean a múltiplos de 0,4 s (cambio ≤ 0,2 s sobre valores
 *   que ya son aleatorios), y los delays ya son múltiplos de 0,1 s;
 * - las animaciones con ease-in-out tienen 12 tramos por ciclo (6 por mitad).
 */
const STEP_HZ = 30;
const EASED_SEGMENTS = 12;
const snapDur = (s: number) => r1(Math.max(0.4, Math.round(s / 0.4) * 0.4));
const easedSteps = (dur: number) => Math.round((dur * STEP_HZ) / EASED_SEGMENTS);
const linearSteps = (dur: number) => Math.round(dur * STEP_HZ);

/** x en los laterales (3–30% o 70–97%) para no competir con el texto centrado */
const sideX = (rand: () => number) => (rand() < 0.5 ? 3 + rand() * 27 : 70 + rand() * 27);

const SPARKLE = "M12 0C12.6 8.4 15.6 11.4 24 12 15.6 12.6 12.6 15.6 12 24 11.4 15.6 8.4 12.6 0 12 8.4 11.4 11.4 8.4 12 0Z";

/* Constelaciones en el espíritu del arte del logo: pocos puntos unidos por líneas finas */
const CONSTELLATIONS = [
  { w: 220, h: 130, points: [[10, 100], [58, 70], [96, 84], [140, 38], [196, 22], [168, 96]], lines: [[0, 1], [1, 2], [2, 3], [3, 4], [3, 5]] },
  { w: 180, h: 150, points: [[20, 20], [70, 46], [52, 104], [120, 120], [160, 70]], lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 1]] },
  { w: 240, h: 90, points: [[8, 60], [52, 40], [100, 52], [148, 20], [196, 34], [232, 70]], lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]] },
];

/*
 * Ubicaciones posibles (cada sección usa otras según su semilla).
 * `top` es una fracción del rango `spread`, convertida a px: siempre anclado arriba.
 */
const CONSTELLATION_SPOTS: { side: CSSProperties; top: number }[] = [
  { side: { left: "4%" }, top: 0.12 },
  { side: { right: "5%" }, top: 0.7 },
  { side: { right: "6%" }, top: 0.1 },
  { side: { left: "5%" }, top: 0.72 },
];

function Constellation({ index, style, className }: { index: number; style: CSSProperties; className?: string }) {
  const c = CONSTELLATIONS[index % CONSTELLATIONS.length];
  return (
    <svg
      viewBox={`0 0 ${c.w} ${c.h}`}
      width={c.w}
      height={c.h}
      className={`sky-anim sky-breathe absolute ${className ?? ""}`}
      style={style}
    >
      <g stroke="var(--color-lilac)" strokeWidth="0.6" strokeLinecap="round" opacity="0.55">
        {c.lines.map(([a, b], i) => (
          <line key={i} x1={c.points[a][0]} y1={c.points[a][1]} x2={c.points[b][0]} y2={c.points[b][1]} />
        ))}
      </g>
      {c.points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 3 ? 2.2 : 1.5} fill={i === 3 ? "var(--color-champagne)" : "var(--color-cream)"} />
      ))}
    </svg>
  );
}

export function CelestialBackground({ seed = 1, density = "normal", constellations = 1, nebula, spread = 900, className }: Props) {
  const rand = mulberry32(seed * 7919);
  const counts = COUNTS[density];

  const twinkles = Array.from({ length: counts.twinkles }, (_, i) => ({
    left: r1(sideX(rand)),
    top: Math.round((0.06 + rand() * 0.86) * spread),
    size: r1(7 + rand() * 7),
    dur: snapDur(4.5 + rand() * 5),
    delay: r1(rand() * 6),
    warm: rand() > 0.55,
    // la mitad no se muestra en mobile
    mobile: i % 2 === 0,
  }));

  const drifters = Array.from({ length: counts.drifters }, (_, i) => ({
    left: r1(5 + rand() * 90),
    top: Math.round((0.05 + rand() * 0.9) * spread),
    size: r1(2 + rand() * 2),
    dx: Math.round(-26 + rand() * 52),
    dy: Math.round(-30 + rand() * 60),
    dur: snapDur(45 + rand() * 50),
    mobile: i === 0,
  }));

  const orbits = Array.from({ length: counts.orbits }, (_, i) => ({
    left: r1(sideX(rand)),
    top: Math.round((0.15 + rand() * 0.7) * spread),
    radius: Math.round(36 + rand() * 60),
    dur: Math.round(120 + rand() * 120),
    reverse: i % 2 === 1,
    stars: 2 + Math.floor(rand() * 2),
    phase: Math.round(rand() * 360),
    mobile: i === 0,
  }));

  // Dos constelaciones de una misma sección van en esquinas opuestas
  const constellationSpots = Array.from({ length: constellations }, (_, i) => {
    const spot = CONSTELLATION_SPOTS[(seed + i * 2) % 4];
    return { ...spot.side, top: Math.round(spot.top * spread) };
  });

  return (
    <div data-celestial aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      {nebula === "fuchsia" && (
        <div
          className="sky-anim sky-breathe absolute inset-0"
          style={{
            "--dur": "18s",
            "--steps": easedSteps(18),
            background:
              "radial-gradient(ellipse 38% 320px at 24% 340px, rgb(214 71 154 / 0.15), transparent 70%), radial-gradient(ellipse 30% 260px at 78% 640px, rgb(214 71 154 / 0.1), transparent 70%)",
          } as CSSProperties}
        />
      )}

      <StarField seed={seed} count={counts.dots} />

      {constellationSpots.map((spot, i) => (
        <Constellation
          key={i}
          index={(seed + i) % CONSTELLATIONS.length}
          className={i === 1 ? "hidden md:block" : "hidden sm:block"}
          style={
            {
              ...spot,
              "--dur": `${snapDur(14 + i * 5)}s`,
              "--steps": easedSteps(snapDur(14 + i * 5)),
              "--delay": `${i * 3}s`,
            } as CSSProperties
          }
        />
      ))}

      {orbits.map((o, i) => (
        <div
          key={`o${i}`}
          className={`absolute ${o.mobile ? "" : "hidden sm:block"}`}
          style={{ left: `${o.left}%`, top: o.top, width: 0, height: 0 }}
        >
          <div
            className="sky-anim sky-orbit"
            style={
              {
                "--dur": `${o.dur}s`,
                "--steps": linearSteps(o.dur),
                animationDirection: o.reverse ? "reverse" : "normal",
                rotate: `${o.phase}deg`,
              } as CSSProperties
            }
          >
            {Array.from({ length: o.stars }, (_, s) => (
              <span
                key={s}
                className="absolute block rounded-full bg-lilac"
                style={{
                  width: s === 0 ? 3 : 2,
                  height: s === 0 ? 3 : 2,
                  opacity: s === 0 ? 0.9 : 0.55,
                  transform: `rotate(${(360 / o.stars) * s}deg) translateX(${o.radius - s * 9}px)`,
                  boxShadow: s === 0 ? "0 0 6px rgb(192 139 221 / 0.8)" : undefined,
                }}
              />
            ))}
          </div>
        </div>
      ))}

      {drifters.map((d, i) => (
        <span
          key={`d${i}`}
          className={`sky-anim sky-drift absolute block rounded-full bg-cream ${d.mobile ? "" : "hidden sm:block"}`}
          style={{
            left: `${d.left}%`,
            top: d.top,
            width: d.size,
            height: d.size,
            opacity: 0.7,
            "--dx": `${d.dx}px`,
            "--dy": `${d.dy}px`,
            "--dur": `${d.dur}s`,
            "--steps": easedSteps(d.dur),
          } as CSSProperties}
        />
      ))}

      {twinkles.map((t, i) => (
        <svg
          key={`t${i}`}
          viewBox="0 0 24 24"
          width={t.size}
          height={t.size}
          className={`sky-anim sky-twinkle absolute ${t.mobile ? "" : "hidden sm:block"}`}
          style={
            {
              left: `${t.left}%`,
              top: t.top,
              "--dur": `${t.dur}s`,
              "--steps": easedSteps(t.dur),
              "--delay": `${t.delay}s`,
            } as CSSProperties
          }
        >
          <path d={SPARKLE} fill={t.warm ? "var(--color-champagne)" : "var(--color-lilac)"} />
        </svg>
      ))}
    </div>
  );
}
