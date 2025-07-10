import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import HeroDealCard from '@/components/products/HeroDealCard';
import ProductGrid from '@/components/products/ProductGrid';
import BestDealCard from '@/components/products/BestDealCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { useEffect, useState } from 'react';
import type { Product } from '@/types/products';

export default function BestDealsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    fetch('/product-mock.json')
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []));
  }, []);

  return (
    <>
      <SectionHeader
        title="Best Deals"
        rightContent={
          <div className="text-sm bg-yellow-100 px-3 py-1 rounded text-black font-semibold">
            Deals ends in <span className="text-orange-600">16d : 21h : 57m : 23s</span>
          </div>
        }
      />
      <div className="flex flex-col lg:flex-row gap-6 mb-12">
        <div className="w-full lg:w-1/3 flex justify-center items-stretch">
          {products
            .filter(
              (product) =>
                product.slug === 'xbox-series-s-512gb-ssd-console' &&
                product.discount > 0
            )
            .map((product) => (
              <HeroDealCard
                key={product.id}
                product={product}
                onAddToCart={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.image,
                  })
                }
                onView={() => router.push(`/shop-page/products/${product.id}`)}
              />
            ))}
        </div>
        <div className="w-full lg:w-2/3">
          <ProductGrid
            products={products.filter(
              (product) =>
                product.slug !== 'xbox-series-s-512gb-ssd-console' &&
                product.discount > 0
            )}
            gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            renderCard={(product: Product) => (
              <div key={product.id}>
                <BestDealCard
                  product={product}
                  onAddToCart={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      quantity: 1,
                      image: product.image,
                    })
                  }
                />
              </div>
            )}
          />
        </div>
      </div>
    </>
  );
} 