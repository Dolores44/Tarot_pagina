import { toRoman } from "@/lib/roman";

type Props = {
  name: string;
  /** Número de carta (en romanos, como el mazo de los reels) */
  number: number;
  className?: string;
};

/*
 * Motivos de las tres cartas del logo: La Luna (XVIII), El Sol (XIX), La Estrella (XVII).
 * Se alternan según el número de carta.
 */
function MoonMotif() {
  return (
    <path d="M66 56a22 22 0 1 0 16 32 17 17 0 1 1-16-32Z" fill="none" stroke="var(--color-lilac)" strokeWidth="0.8" />
  );
}

function SunMotif() {
  const rays = Array.from({ length: 16 }, (_, i) => {
    const a = (i / 16) * Math.PI * 2;
    const r1 = 13;
    const r2 = i % 2 === 0 ? 22 : 18;
    const f = (v: number) => Math.round(v * 100) / 100;
    return { x1: f(60 + Math.cos(a) * r1), y1: f(78 + Math.sin(a) * r1), x2: f(60 + Math.cos(a) * r2), y2: f(78 + Math.sin(a) * r2) };
  });
  return (
    <g fill="none" stroke="var(--color-lilac)" strokeWidth="0.7" strokeLinecap="round">
      <circle cx="60" cy="78" r="9" />
      {rays.map((ray, i) => (
        <line key={i} {...ray} />
      ))}
    </g>
  );
}

function StarMotif() {
  return (
    <g fill="none" stroke="var(--color-lilac)" strokeWidth="0.7" strokeLinejoin="round">
      <path d="M60 56l3.2 15.5L78 66l-12 11 12 11-14.8-5.5L60 98l-3.2-15.5L42 88l12-11-12-11 14.8 5.5Z" />
      <path d="M60 64l1.6 10.6L70 78l-8.4 3.4L60 92l-1.6-10.6L50 78l8.4-3.4Z" opacity="0.7" />
    </g>
  );
}

const motifs = [StarMotif, MoonMotif, SunMotif];

/**
 * Carta ornamental para productos sin banner (las lecturas por tiempo):
 * número romano, motivo del logo y nombre, en el estilo de las cartas de los reels.
 * Ocupa todo su contenedor (el marco lo pone ProductVisual).
 */
export function TarotCardFace({ name, number, className }: Props) {
  const Motif = motifs[number % motifs.length];

  return (
    <div className={`card-sky absolute inset-0 ${className ?? ""}`} aria-hidden="true">
      <svg viewBox="0 0 120 150" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full">
        <g fill="none" stroke="var(--color-violet)" strokeWidth="0.5" opacity="0.6">
          <circle cx="60" cy="78" r="31" />
          <circle cx="60" cy="78" r="35" strokeDasharray="0.8 2.6" />
        </g>
        <Motif />
        <g fill="var(--color-champagne)" opacity="0.75">
          <circle cx="24" cy="40" r="0.7" />
          <circle cx="98" cy="50" r="0.6" />
          <circle cx="28" cy="116" r="0.6" />
          <circle cx="94" cy="112" r="0.7" />
          <circle cx="84" cy="30" r="0.5" />
        </g>
      </svg>
      <div className="pointer-events-none absolute inset-2.5 rounded-sm border border-gold/45" />
      <span className="absolute top-4 left-1/2 -translate-x-1/2 font-display text-base tracking-[0.2em] text-champagne">
        {toRoman(number)}
      </span>
      <span className="absolute inset-x-5 bottom-5 border-t border-gold/40 pt-3 text-center font-display text-label leading-snug tracking-[0.12em] text-champagne uppercase">
        {name}
      </span>
    </div>
  );
}
