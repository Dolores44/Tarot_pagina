type Props = {
  className?: string;
};

/** Filigrana con luna creciente: cierre de títulos y separador de secciones. */
export function OrnamentDivider({ className }: Props) {
  return (
    <svg
      viewBox="0 0 240 24"
      aria-hidden="true"
      focusable="false"
      className={className ?? "h-5 w-48 text-gold"}
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round">
        <path d="M8 12h78" opacity="0.7" />
        <path d="M154 12h78" opacity="0.7" />
        <path d="M86 12c8 0 10-5 16-5" />
        <path d="M154 12c-8 0-10-5-16-5" />
        <path d="M126 5.5a7 7 0 1 0 0 13 5.6 5.6 0 1 1 0-13Z" />
      </g>
      <g fill="currentColor">
        <path d="M96 12l3-3 3 3-3 3Z" />
        <path d="M138 12l3-3 3 3-3 3Z" />
        <circle cx="8" cy="12" r="1.2" />
        <circle cx="232" cy="12" r="1.2" />
      </g>
    </svg>
  );
}
