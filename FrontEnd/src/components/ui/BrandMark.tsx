import Image from "next/image";
import { siteConfig } from "@/config/site";

type Props = {
  size: number;
  priority?: boolean;
  className?: string;
  /** Si el nombre ya está escrito al lado, el logo es decorativo */
  decorative?: boolean;
};

/** Emblema circular original (sin modificar, solo recortado al círculo). */
export function BrandMark({ size, priority, className, decorative }: Props) {
  const src = size <= 64 ? siteConfig.logo.src.sm : size <= 160 ? siteConfig.logo.src.md : siteConfig.logo.src.xl;

  return (
    <Image
      src={src}
      alt={decorative ? "" : siteConfig.logo.alt}
      width={size}
      height={size}
      priority={priority}
      className={`rounded-full ${className ?? ""}`}
    />
  );
}
