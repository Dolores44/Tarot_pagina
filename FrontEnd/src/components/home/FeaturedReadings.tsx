import { ProductCard } from "@/components/catalog/ProductCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { homeContent } from "@/content/home";
import type { Product } from "@/types/catalog";

type Props = {
  products: Product[];
};

/**
 * Destacados de Inicio (featured: true en src/content/catalog.ts),
 * presentados como piezas del universo visual de Paola, no como fichas de tienda.
 */
export function FeaturedReadings({ products }: Props) {
  const { featured } = homeContent;
  if (products.length === 0) return null;

  return (
    <section aria-labelledby="featured-title" className="bg-night px-4 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          id="featured-title"
          eyebrow={featured.eyebrow}
          titleTop={featured.titleTop}
          titleBottom={featured.titleBottom}
          className="reveal"
        />

        <ul className="mt-14 grid gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.slug} className="reveal">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>

        <div className="reveal mt-16 flex justify-center">
          <ButtonLink href="/catalogo">{featured.cta}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
