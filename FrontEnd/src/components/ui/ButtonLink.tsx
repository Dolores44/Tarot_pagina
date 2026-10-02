import Link from "next/link";
import type { ReactNode } from "react";
import { WhatsAppIcon } from "@/components/ui/icons";

type Variant = "primary" | "whatsapp" | "text";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Texto para lectores de pantalla cuando el visible no alcanza */
  ariaLabel?: string;
};

const base =
  "inline-flex min-h-13 items-center justify-center gap-2.5 text-center font-display text-button tracking-[0.12em] uppercase transition duration-300";

const variants: Record<Variant, string> = {
  primary:
    "rounded-sm border border-lilac/70 bg-violet-deep px-8 py-3 text-cream hover:border-lilac hover:shadow-glow",
  whatsapp:
    "rounded-sm border border-champagne/80 px-8 py-3 text-champagne hover:border-champagne hover:bg-champagne hover:text-night",
  text: "group min-h-0 px-1 py-1 text-lilac hover:text-cream",
};

const isExternal = (href: string) => href.startsWith("http");

/**
 * Botón-link de la marca. Los links externos (WhatsApp, Instagram) abren en
 * pestaña nueva con rel="noopener noreferrer".
 */
export function ButtonLink({ href, children, variant = "primary", className, ariaLabel }: Props) {
  const classes = `${base} ${variants[variant]} ${className ?? ""}`;
  const content = (
    <>
      {variant === "whatsapp" && <WhatsAppIcon className="size-5 shrink-0" />}
      <span>{children}</span>
      {variant === "text" && (
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </>
  );

  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {content}
    </Link>
  );
}
