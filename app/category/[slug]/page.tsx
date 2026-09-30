import { notFound } from "next/navigation";
import { siteConfig } from "@/app/data/siteConfig";
import { productsByCategory } from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";


export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category = siteConfig.categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const items = productsByCategory[slug] ?? [];

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl text-center font-bold">{category.name}</h1>
        {items.length === 0 ? (
        <p className="mt-6 text-gray-600">No products in this category yet.</p>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    
    </main>
  );
}