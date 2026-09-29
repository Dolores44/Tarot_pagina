import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/catalog/ProductDetail";
import { siteConfig } from "@/config/site";
import { hasPlaceholder } from "@/content/placeholder";
import { formatPrice } from "@/lib/format";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { getAllProducts, getProduct, getRelatedProducts, productPath } from "@/services/catalog.service";

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({ categoria: product.categorySlug, producto: product.slug }));
}

export async function generateMetadata(props: PageProps<"/catalogo/[categoria]/[producto]">): Promise<Metadata> {
  const { categoria, producto } = await props.params;
  const product = await getProduct(categoria, producto);
  if (!product) return {};

  // Nunca publicar un placeholder como meta description
  const description = !hasPlaceholder(product.shortDescription)
    ? `${product.shortDescription} ${formatPrice(product.price)}. Consultá por WhatsApp.`
    : `${product.name} de ${siteConfig.name}: ${formatPrice(product.price)}. Consultá por WhatsApp.`;

  return {
    title: product.name,
    description,
    alternates: { canonical: productPath(product) },
    openGraph: { title: `${product.name} | ${siteConfig.name}`, description, url: productPath(product) },
  };
}

export default async function ProductPage(props: PageProps<"/catalogo/[categoria]/[producto]">) {
  const { categoria, producto } = await props.params;

  // Ambos slugs se validan en el servicio antes de llegar al repositorio
  const product = await getProduct(categoria, producto);
  if (!product) notFound();

  const related = await getRelatedProducts(product);

  return <ProductDetail product={product} related={related} whatsappUrl={buildWhatsAppUrl(product)} />;
}
