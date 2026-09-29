type Props = {
  className?: string;
};

/**
 * Gato negro que se asoma — firma visual de los flyers y del arte de la marca.
 * Es un recurso gráfico propio, no el logo. Parpadea muy de vez en cuando (CSS).
 */
export function PeekingCat({ className }: Props) {
  return (
    <svg
      viewBox="0 0 260 132"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <linearGradient id="cat-rim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--color-violet)" stopOpacity="0.55" />
          <stop offset="0.5" stopColor="var(--color-violet)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Cabeza y orejas */}
      <path
        d="M58 132V84c0-22 12-38 30-45l-8-37c-.3-1.6 1.5-2.6 2.7-1.5L114 30c10-2 22-2 32 0L177.3.5c1.2-1.1 3 0 2.7 1.5l-8 37c18 7 30 23 30 45v48Z"
        fill="var(--color-void)"
        stroke="url(#cat-rim)"
        strokeWidth="1.5"
      />
      {/* Patas apoyadas */}
      <ellipse cx="46" cy="124" rx="32" ry="14" fill="var(--color-void)" stroke="url(#cat-rim)" strokeWidth="1.2" />
      <ellipse cx="214" cy="124" rx="32" ry="14" fill="var(--color-void)" stroke="url(#cat-rim)" strokeWidth="1.2" />

      {/* Ojos */}
      <g className="animate-blink" style={{ transformOrigin: "130px 82px" }}>
        <circle cx="106" cy="82" r="10.5" fill="var(--color-void)" stroke="var(--color-cat-eye)" strokeWidth="2.6" />
        <circle cx="154" cy="82" r="10.5" fill="var(--color-void)" stroke="var(--color-cat-eye)" strokeWidth="2.6" />
        <circle cx="109.5" cy="78.5" r="2.2" fill="var(--color-cream)" opacity="0.9" />
        <circle cx="157.5" cy="78.5" r="2.2" fill="var(--color-cream)" opacity="0.9" />
      </g>
    </svg>
  );
}
