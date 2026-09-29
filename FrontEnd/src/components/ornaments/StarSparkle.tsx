type Props = {
  className?: string;
};

/** Estrella de 4 puntas de los flyers. Hereda el color con `text-*`. */
export function StarSparkle({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className}>
      <path
        fill="currentColor"
        d="M12 0C12.6 8.4 15.6 11.4 24 12 15.6 12.6 12.6 15.6 12 24 11.4 15.6 8.4 12.6 0 12 8.4 11.4 11.4 8.4 12 0Z"
      />
    </svg>
  );
}
