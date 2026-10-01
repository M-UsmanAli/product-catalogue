import { newArrivals } from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";

const NewArrival = () => {
  if (newArrivals.length === 0) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl md:text-4xl font-bold text-center">New Arrivals</h2>
       <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {newArrivals.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

    </section>
  );
};

export default NewArrival;
