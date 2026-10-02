import { CategoryNav } from "@/components/catalog/CategoryNav";
import { PageBand } from "@/components/catalog/PageBand";
import { ProductCard } from "@/components/catalog/ProductCard";
import { OrnamentDivider } from "@/components/ornaments/OrnamentDivider";
import { StarSparkle } from "@/components/ornaments/StarSparkle";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { catalogTexts } from "@/content/catalog-texts";
import type { CategoryWithCount, Product } from "@/types/catalog";

type Group = {
  category: CategoryWithCount;
  products: Product[];
};

type Props = {
  title: { eyebrow: string; titleTop: string; titleBottom?: string };
  description?: string;
  categories: CategoryWithCount[];
  activeSlug: string | null;
  totalCount: number;
  /** Una sección por categoría (en /catalogo) o una sola (en /catalogo/[categoria]) */
  groups: Group[];
  whatsappUrl: string;
};

function ProductGrid({ products, headingLevel }: { products: Product[]; headingLevel: "h2" | "h3" }) {
  return (
    <ul className="grid gap-x-10 gap-y-20 sm:grid-cols-2">
      {products.map((product, index) => (
        <li key={product.slug} className="reveal">
          <ProductCard product={product} headingLevel={headingLevel} priority={index < 2} />
        </li>
      ))}
    </ul>
  );
}

/** Vista compartida por /catalogo y /catalogo/[categoria]. */
export function CatalogView({ title, description, categories, activeSlug, totalCount, groups, whatsappUrl }: Props) {
  const showGroupTitles = groups.length > 1;

  return (
    <>
      <PageBand className="pt-16 pb-14 lg:pt-20 lg:pb-16">
        <SectionTitle as="h1" id="catalog-title" {...title} />
        {description && <p className="mx-auto mt-6 max-w-xl text-center">{description}</p>}
      </PageBand>

      <section aria-labelledby="catalog-title" className="bg-night px-4 pt-8 pb-24 sm:px-8 lg:pt-14">
        {/* minmax(0,1fr): la fila de categorías con scroll no debe ensanchar la columna en mobile */}
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-14">
          <CategoryNav categories={categories} activeSlug={activeSlug} totalCount={totalCount} whatsappUrl={whatsappUrl} />

          {groups.length === 0 ? (
            <div className="flyer-box flex flex-col items-center px-6 py-14 text-center">
              <h2 className="text-2xl uppercase">{catalogTexts.empty.title}</h2>
              <p className="mt-3">{catalogTexts.empty.text}</p>
              <ButtonLink href={whatsappUrl} variant="whatsapp" className="mt-8">
                {catalogTexts.card.whatsapp}
              </ButtonLink>
            </div>
          ) : (
            <div className="space-y-24">
              {groups.map(({ category, products }) =>
                showGroupTitles ? (
                  <section key={category.slug} aria-labelledby={`grupo-${category.slug}`}>
                    <header className="mb-12 flex flex-col items-center text-center">
                      <h2
                        id={`grupo-${category.slug}`}
                        className="flex items-center gap-4 text-[1.9rem] uppercase sm:text-[2.4rem]"
                      >
                        <StarSparkle className="size-4 shrink-0 text-violet" />
                        {category.name}
                        <StarSparkle className="size-4 shrink-0 text-violet" />
                      </h2>
                      <OrnamentDivider className="mt-4 h-5 w-44 text-gold/70" />
                    </header>
                    <ProductGrid products={products} headingLevel="h3" />
                  </section>
                ) : (
                  <ProductGrid key={category.slug} products={products} headingLevel="h2" />
                ),
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
