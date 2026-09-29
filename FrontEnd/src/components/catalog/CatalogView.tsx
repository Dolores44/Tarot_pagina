import { CategoryNav } from "@/components/catalog/CategoryNav";
import { PageBand } from "@/components/catalog/PageBand";
import { ProductCard } from "@/components/catalog/ProductCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ContentText } from "@/components/ui/ContentText";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { catalogContent } from "@/content/catalog";
import type { CategoryWithCount, Product } from "@/types/catalog";

type Props = {
  title: { eyebrow: string; titleTop: string; titleBottom?: string };
  description?: string | null;
  categories: CategoryWithCount[];
  activeSlug: string | null;
  totalCount: number;
  products: Product[];
  whatsappUrl: string;
};

/** Vista compartida por /catalogo y /catalogo/[categoria]. */
export function CatalogView({ title, description, categories, activeSlug, totalCount, products, whatsappUrl }: Props) {
  return (
    <>
      <PageBand className="pt-16 pb-14 lg:pt-20 lg:pb-16">
        <SectionTitle as="h1" id="catalog-title" {...title} />
        {description && <ContentText text={description} className="mx-auto mt-6 max-w-xl text-center" />}
      </PageBand>

      <section aria-labelledby="catalog-title" className="bg-night px-4 pt-8 pb-24 sm:px-8 lg:pt-14">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[15.5rem_1fr] lg:gap-14">
          <CategoryNav
            categories={categories}
            activeSlug={activeSlug}
            totalCount={totalCount}
            whatsappUrl={whatsappUrl}
          />

          {products.length > 0 ? (
            <ul className="grid gap-x-8 gap-y-16 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <li key={product.id} className="reveal">
                  <ProductCard product={product} headingLevel="h2" showCategory={activeSlug === null} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="flyer-box flex flex-col items-center px-6 py-14 text-center">
              <h2 className="text-2xl uppercase">{catalogContent.empty.title}</h2>
              <p className="mt-3">{catalogContent.empty.text}</p>
              <ButtonLink href={whatsappUrl} variant="whatsapp" className="mt-8">
                Consultar por WhatsApp
              </ButtonLink>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
