import Image from "next/image";
import { toRoman } from "@/lib/roman";
import type { Product } from "@/types/catalog";

type Props = {
  product: Pick<Product, "name" | "imageUrl" | "imageAlt">;
  /** Número de carta (se muestra en romanos, como el mazo de los reels) */
  number: number;
  className?: string;
};

/*
 * Motivos de las tres cartas del logo: La Luna (XVIII), El Sol (XIX), La Estrella (XVII).
 * Se alternan según el número de carta.
 */
function MoonMotif() {
  return (
    <path
      d="M66 56a22 22 0 1 0 16 32 17 17 0 1 1-16-32Z"
      fill="none"
      stroke="var(--color-lilac)"
      strokeWidth="0.8"
    />
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
 * Frente de carta de tarot para un producto.
 * Con imagen: la muestra dentro del marco. Sin imagen: carta ornamental
 * con número romano, motivo del logo y nombre, en el estilo de los reels.
 */
export function TarotCardFace({ product, number, className }: Props) {
  const Motif = motifs[number % motifs.length];

  return (
    <div className={`tarot-frame relative aspect-[3/4] overflow-hidden rounded-md bg-surface ${className ?? ""}`}>
      {product.imageUrl ? (
        <Image
          src={product.imageUrl}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
      ) : (
        <div className="card-sky absolute inset-0" aria-hidden="true">
          <svg viewBox="0 0 120 160" className="absolute inset-0 h-full w-full">
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
        </div>
      )}

      {/* Marco interior + número + nombre (siempre visibles, como en las cartas) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-2.5 rounded-sm border border-gold/45" />
      <span
        aria-hidden="true"
        className="absolute top-4 left-1/2 -translate-x-1/2 font-display text-sm tracking-[0.2em] text-champagne"
      >
        {toRoman(number)}
      </span>
      {!product.imageUrl && (
        <span
          aria-hidden="true"
          className="absolute inset-x-5 bottom-5 border-t border-gold/40 pt-2.5 text-center font-display text-[0.7rem] leading-snug tracking-label text-champagne uppercase"
        >
          {product.name}
        </span>
      )}
    </div>
  );
}
