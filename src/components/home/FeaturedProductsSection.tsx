'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ProductGrid from '@/components/products/ProductGrid';
import SectionHeader from '@/components/ui/SectionHeader';
import type { Product } from '@/types/products';

export default function FeaturedProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/product-mock.json');
        const data = await res.json();
        setProducts(data.products || []);
      } catch (err) {
        console.error('Failed to load products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const renderBadge = (discount: number) => {
    if (discount >= 20) return { text: `${discount}% OFF`, bg: 'bg-yellow-400', textColor: 'text-black' };
    if (discount === 0) return { text: 'HOT', bg: 'bg-red-500', textColor: 'text-white' };
    if (discount >= 10) return { text: 'BEST DEALS', bg: 'bg-blue-500', textColor: 'text-white' };
    return { text: 'SALE', bg: 'bg-green-500', textColor: 'text-white' };
  };

  return (
    <div className="flex-1">
      <SectionHeader
        title="Featured Products"
        rightContent={
          <div className="flex gap-4 text-sm text-gray-600">
            <span className="text-black font-medium border-b-2 border-orange-500 pb-1 cursor-pointer">All Product</span>
            {['Smart Phone', 'Laptop', 'Headphone', 'TV'].map((label) => (
              <span key={label} className="hover:text-orange-500 cursor-pointer">{label}</span>
            ))}
            <span className="hover:text-orange-500 font-semibold cursor-pointer">Browse All Product →</span>
          </div>
        }
      />

      {loading ? (
        <div className="text-center py-10 text-gray-500">Loading products...</div>
      ) : (
        <ProductGrid
          products={products.slice(0, 8)}
          renderCard={(product: Product) => {
            const badge = renderBadge(product.discount);

            return (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition relative group">
                <div className={`absolute top-2 left-2 ${badge.bg} ${badge.textColor} text-xs font-bold px-2 py-0.5 rounded`}>
                  {badge.text}
                </div>

                <div className="w-full h-40 relative mb-3">
                  <a href={`/product/${product.slug}`}>
                    <Image src={product.image} alt={product.name} fill className="object-contain" />
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold line-clamp-2 h-10 mb-1">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-800 font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-yellow-500 text-xs">
                    {'★'.repeat(Math.floor(product.rating))}
                    <span className="text-gray-400 ml-1">({product.reviews})</span>
                  </div>
                </div>
              </div>
            );
          }}
        />
      )}
    </div>
  );
}
