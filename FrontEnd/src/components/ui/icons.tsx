type Props = {
  className?: string;
};

export function WhatsAppIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className ?? "size-5"}>
      <path
        d="M12 2.8a9.2 9.2 0 0 0-7.9 13.9L2.9 21.2l4.6-1.2A9.2 9.2 0 1 0 12 2.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        fill="currentColor"
        d="M8.7 7.6c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.4l.7 1.7c.1.2 0 .5-.1.7l-.5.6c-.1.2-.2.3 0 .6a7 7 0 0 0 2.9 2.6c.2.1.4.1.6-.1l.6-.7c.2-.2.4-.3.6-.2l1.7.8c.3.1.4.2.4.4 0 .5-.1 1.1-.5 1.5-.5.4-1.3.8-2.2.7-1 0-3-.8-4.4-2.2A7.6 7.6 0 0 1 8.2 10c-.2-.9.1-1.8.5-2.4Z"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className ?? "size-5"}>
      <g fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
      </g>
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className ?? "size-5"}>
      <path
        d="M14.2 3v11.4a3.7 3.7 0 1 1-3.7-3.7M14.2 3c.3 2.6 2.1 4.5 4.8 4.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className ?? "size-6"}>
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M4 7h16" />
        <path d="M7 12h13" />
        <path d="M4 17h16" />
      </g>
    </svg>
  );
}

export function CloseIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className ?? "size-6"}>
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M6 6l12 12" />
        <path d="M18 6L6 18" />
      </g>
    </svg>
  );
}

/* Íconos de los tipos de lectura, en el estilo de los badges de los flyers */

export function RingsIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="12.5" cy="17" r="6.5" />
        <circle cx="19.5" cy="17" r="6.5" />
      </g>
      <path fill="currentColor" d="M16 4.5c.2 2.3 1 3.1 3.3 3.3-2.3.2-3.1 1-3.3 3.3-.2-2.3-1-3.1-3.3-3.3 2.3-.2 3.1-1 3.3-3.3Z" />
    </svg>
  );
}

export function WaningMoonIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className={className}>
      <path
        d="M13 5a11 11 0 1 0 14 14A9 9 0 0 1 13 5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="23" cy="8" r="1" fill="currentColor" />
    </svg>
  );
}

export function HourglassIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5h14M9 27h14" />
        <path d="M10.5 5c0 6 5.5 7.5 5.5 11s-5.5 5-5.5 11" />
        <path d="M21.5 5c0 6-5.5 7.5-5.5 11s5.5 5 5.5 11" />
      </g>
      <path fill="currentColor" d="M13 25.5c1-2 2-3 3-3s2 1 3 3Z" opacity="0.8" />
    </svg>
  );
}
