import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/types/products';

export default function DealCategoriesSection() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/product-mock.json')
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []));
  }, []);

  return (
    <section className="my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h3 className="text-sm font-bold uppercase mb-4">Flash Sale Today</h3>
          <div className="space-y-4">
            {products
              .filter((product) => product.discount >= 20)
              .slice(0, 3)
              .map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 bg-white p-3 rounded shadow-sm hover:shadow-md transition"
                >
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium line-clamp-2">
                      {product.name}
                    </h4>
                    <p className="text-blue-600 font-bold text-sm">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase mb-4">Best Sellers</h3>
          <div className="space-y-4">
            {products
              .sort((a, b) => b.reviews - a.reviews)
              .slice(0, 3)
              .map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 bg-white p-3 rounded shadow-sm hover:shadow-md transition"
                >
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium line-clamp-2">
                      {product.name}
                    </h4>
                    <p className="text-blue-600 font-bold text-sm">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase mb-4">Top Rated</h3>
          <div className="space-y-4">
            {products
              .filter((product) => product.rating >= 4.5)
              .slice(0, 3)
              .map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 bg-white p-3 rounded shadow-sm hover:shadow-md transition"
                >
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium line-clamp-2">
                      {product.name}
                    </h4>
                    <p className="text-blue-600 font-bold text-sm">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase mb-4">New Arrival</h3>
          <div className="space-y-4">
            {products.slice(-3).map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-4 bg-white p-3 rounded shadow-sm hover:shadow-md transition"
              >
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium line-clamp-2">
                    {product.name}
                  </h4>
                  <p className="text-blue-600 font-bold text-sm">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 