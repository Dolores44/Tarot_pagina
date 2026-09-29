type Props = {
  className?: string;
};

/** Sol en línea fina (esquina superior izquierda de los flyers). */
export function SunLine({ className }: Props) {
  const rays = Array.from({ length: 32 }, (_, i) => {
    const angle = (i / 32) * Math.PI * 2;
    const inner = 22;
    const outer = i % 2 === 0 ? 48 : 34;
    const r = (v: number) => Math.round(v * 100) / 100;
    return {
      x1: r(50 + Math.cos(angle) * inner),
      y1: r(50 + Math.sin(angle) * inner),
      x2: r(50 + Math.cos(angle) * outer),
      y2: r(50 + Math.sin(angle) * outer),
    };
  });

  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false" className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
        <circle cx="50" cy="50" r="16" />
        {rays.map((ray, i) => (
          <line key={i} {...ray} />
        ))}
      </g>
    </svg>
  );
}

/** Luna creciente en línea fina (esquina superior derecha de los flyers). */
export function CrescentMoon({ className }: Props) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false" className={className}>
      <path
        d="M62 8a42 42 0 1 0 30 58A34 34 0 1 1 62 8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
