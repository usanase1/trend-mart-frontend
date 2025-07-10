import { useEffect, useState } from 'react';
import ProductGrid from '@/components/products/ProductGrid';
import SectionHeader from '@/components/ui/SectionHeader';
import type { Product } from '@/types/products';

export default function FeaturedProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/product-mock.json')
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []));
  }, []);

  return (
    <div className="flex-1">
      <SectionHeader
        title="Featured Products"
        rightContent={
          <div className="flex gap-4 text-sm text-gray-600">
            <span className="text-black font-medium border-b-2 border-orange-500 pb-1 cursor-pointer">All Product</span>
            <span className="hover:text-orange-500 cursor-pointer">Smart Phone</span>
            <span className="hover:text-orange-500 cursor-pointer">Laptop</span>
            <span className="hover:text-orange-500 cursor-pointer">Headphone</span>
            <span className="hover:text-orange-500 cursor-pointer">TV</span>
            <span className="hover:text-orange-500 font-semibold cursor-pointer">Browse All Product →</span>
          </div>
        }
      />
      <ProductGrid
        products={products.slice(0, 8)}
        renderCard={(product: Product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition relative group">
            {/* Discount/Badge logic can be extracted to a Badge component if desired */}
            {product.discount >= 20 && (
              <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
                {product.discount}% OFF
              </div>
            )}
            {product.discount === 0 && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                HOT
              </div>
            )}
            {product.discount >= 10 && product.discount < 20 && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                BEST DEALS
              </div>
            )}
            {product.discount > 0 && product.discount < 10 && (
              <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                SALE
              </div>
            )}
            <div className="w-full h-40 relative mb-3 group">
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} className="object-contain w-full h-full" />
              </a>
              {/* ProductHoverActions can be added here if needed */}
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
                {"★".repeat(Math.floor(product.rating))}
                <span className="text-gray-400 ml-1">({product.reviews})</span>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
} 