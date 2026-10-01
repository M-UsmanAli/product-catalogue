export type Product = {
  id: string;
  name: string;
  price: number; // in PKR
  category: string; // must match a slug in siteConfig.categories
  image: string; // path inside /public
  description?: string;
  isNew?:boolean;
};

export const productsByCategory: Record<string, Product[]> = {
  "wool-clothing": [
    { id: "wool-1", name: "Wool Sweater", price: 2500, category: "wool-clothing", image: "/products/sweater-hd.jpg" },
    { id: "wool-2", name: "Wool Cap", price: 800, category: "wool-clothing", image: "/products/wool-caps-hd.jpg" },
    { id: "wool-3", name: "Wool Scarf", price: 1200, category: "wool-clothing", image: "/products/scarf-hd.jpg" },
    { id: "wool-4", name: "Wool Scarf", price: 1200, category: "wool-clothing", image: "/products/store-hero.jpg", isNew:true },
  ],
  "laces": [
    { id: "laces-1", name: "Baby Laces White", price: 500, category: "laces", image: "/products/laces-white.jpg" },
    { id: "laces-2", name: "Baby Laces Pink", price: 500, category: "laces", image: "/products/laces-pink.jpg" },
    { id: "laces-3", name: "Baby Laces Blue", price: 500, category: "laces", image: "/products/laces-blue.jpg" },
    { id: "laces-4", name: "Baby Laces Yellow", price: 500, category: "laces", image: "/products/laces-yellow.jpg" },
    { id: "laces-5", name: "Baby Laces Green", price: 500, category: "laces", image: "/products/laces-green.jpg" },
  ],
  "strollers": [
    { id: "strollers-1", name: "Stroller Model A", price: 12000, category: "strollers", image: "/products/stroller-a.jpg" },
    // ... up to id: "15" for 7 strollers
  ],
};

export const products: Product[] = Object.values(productsByCategory).flat();

// New arrivals, pulled from the flat list
export const newArrivals: Product[] = products.filter((p) => p.isNew);