import { StarSparkle } from "@/components/ornaments/StarSparkle";
import { catalogTexts } from "@/content/catalog-texts";
import type { Product } from "@/types/catalog";

type Props = {
  product: Pick<Product, "isCombo" | "discount">;
  className?: string;
};

/**
 * Insignias sobre la imagen: "Combo" y, solo si figura en el material real,
 * el descuento (ej. "20% OFF"). Nunca precios.
 */
export function ProductBadges({ product, className }: Props) {
  if (!product.isCombo && !product.discount) return null;

  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      {product.isCombo && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-champagne/80 bg-night/85 px-3.5 py-1 font-display text-label tracking-label text-champagne uppercase backdrop-blur-sm">
          <StarSparkle className="size-2.5 text-champagne" />
          {catalogTexts.card.combo}
        </span>
      )}
      {product.discount && (
        <span className="inline-flex items-center rounded-full border border-magenta/70 bg-night/85 px-3.5 py-1 font-display text-label tracking-label text-rose uppercase shadow-glow-magenta backdrop-blur-sm">
          {product.discount}
        </span>
      )}
    </div>
  );
}
