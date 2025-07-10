import { useEffect, useState } from 'react';
import Image from 'next/image';
import ProductHoverActions from '@/components/products/ProductHoverActions';
import Button from '@/components/ui/Button';
import type { Product } from '@/types/products';

export default function ComputerAccessoriesSection() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/product-mock.json')
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []));
  }, []);

  return (
    <section className="my-16">
      <h2 className="text-2xl font-bold mb-6">Computer Accessories</h2>
      <div className="flex gap-4 text-sm text-gray-600 mb-6 flex-wrap">
        <span className="text-black font-medium border-b-2 border-orange-500 pb-1 cursor-pointer">All Product</span>
        <span className="hover:text-orange-500 cursor-pointer">Keyboard & Mouse</span>
        <span className="hover:text-orange-500 cursor-pointer">Headphone</span>
        <span className="hover:text-orange-500 cursor-pointer">Webcam</span>
        <span className="hover:text-orange-500 cursor-pointer">Printer</span>
        <span className="hover:text-orange-500 font-semibold cursor-pointer">Browse All Product →</span>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 flex-1">
          {products
            .filter((product) => product.subcategory === 'Computer Accessories')
            .map((product) => (
              <div
                key={product.id}
                className="relative rounded-lg p-4 bg-white shadow group transition hover:shadow-md"
              >
                {product.discount >= 25 && (
                  <div className="absolute top-2 left-2 z-10">
                    <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
                      {product.discount}% OFF
                    </span>
                  </div>
                )}
                {product.discount === 0 && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded w-fit">
                    HOT
                  </div>
                )}
                {product.discount > 0 && product.discount < 10 && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded w-fit">
                    SALE
                  </div>
                )}
                {product.discount >= 10 && product.discount < 25 && (
                  <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded w-fit">
                    BEST DEALS
                  </div>
                )}
                <div className="w-full h-40 relative mb-3 group">
                  <a href={`/product/${product.slug}`}>
                    <Image src={product.image} alt={product.name} fill className="object-contain" />
                  </a>
                  <ProductHoverActions
                    product={product}
                    onAddToCart={() => {}}
                    onView={() => {}}
                  />
                </div>
                <h3 className="text-sm font-semibold line-clamp-2 h-10 mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-blue-800 font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <div className="text-yellow-500 text-xs mb-1">
                  {"★".repeat(Math.floor(product.rating))}
                  <span className="text-gray-400 ml-1">
                    ({product.reviews})
                  </span>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {product.features?.[0]}
                </p>
              </div>
            ))}
        </div>
        <div className="w-full lg:w-[280px] flex flex-col gap-6">
          <div className="bg-yellow-100 p-6 rounded-lg text-black">
            <Image
              src="/images/xiaomi-earbuds.png"
              alt="Xiaomi Earbuds"
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">
              Xiaomi True Wireless Earbuds
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Escape the noise, It’s time to hear the magic with Xiaomi
              Earbuds.
            </p>
            <div className="text-xs font-semibold bg-white py-1 px-2 rounded mb-3 inline-block text-black">
              Only for: {" "}
              <span className="text-green-800 ml-1 font-bold">
                $299 USD
              </span>
            </div>
            <Button as="button" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded w-full">
              SHOP NOW →
            </Button>
          </div>
          <div className="bg-[#191C1F] text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">SUMMER SALES</h3>
            <p className="text-sm mb-3">
              37% DISCOUNT only for{" "}
              <span className="text-blue-400 font-semibold">
                SmartPhone
              </span>{" "}
              product.
            </p>
            <Button as="button" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded w-full">
              SHOP NOW →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 