import React from "react";
import Image from "next/image";
import { siteConfig } from "../data/siteConfig";
import Link from "next/link";

const CategoryTiles = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl md:text-4xl font-bold text-center">Shop by Category</h2>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        {siteConfig.categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-200"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            <span className="absolute bottom-3 left-3 text-lg font-semibold text-white">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
