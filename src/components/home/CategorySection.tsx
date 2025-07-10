import { useEffect, useState } from 'react';
import CategoryCard from '@/components/products/CategoryCard';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import type { Product } from '@/types/products';

export default function CategorySection() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/product-mock.json')
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []));
  }, []);

  const getUniqueCategories = () => {
    const seen = new Set();
    const result = [];
    for (const product of products) {
      if (!seen.has(product.subcategory)) {
        seen.add(product.subcategory);
        result.push({
          subcategory: product.subcategory,
          image: product.image,
        });
      }
    }
    return result;
  };

  return (
    <section className="my-24">
      <SectionHeader title="Shop with Categorys" />
      <div className="relative">
        <div
          id="category-scroll"
          className="flex gap-6 overflow-x-auto px-6 scrollbar-hide scroll-smooth"
        >
          {getUniqueCategories().map((cat) => (
            <CategoryCard
              key={cat.subcategory}
              image={cat.image}
              name={cat.subcategory}
            />
          ))}
        </div>
        <Button
          as="button"
          onClick={() =>
            document
              .getElementById('category-scroll')
              ?.scrollBy({ left: -200, behavior: 'smooth' })
          }
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 z-10"
        >
          ←
        </Button>
        <Button
          as="button"
          onClick={() =>
            document
              .getElementById('category-scroll')
              ?.scrollBy({ left: 200, behavior: 'smooth' })
          }
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 z-10"
        >
          →
        </Button>
      </div>
    </section>
  );
} 