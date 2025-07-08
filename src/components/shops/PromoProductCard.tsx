"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

interface PromoProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    slug: string;
    image: string;
  };
  addToCart: (product: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }) => void;
}

export default function PromoProductCard({ product, addToCart }: PromoProductCardProps) {
  const router = useRouter();

  return (
    <div className="max-w-sm mx-auto border border-orange-100 rounded-md p-6 text-center shadow-sm hover:shadow-md transition">
      
      <div className="mb-4">
        <Image
          src={product.image}
          alt={product.name}
          width={250}
          height={250}
          className="mx-auto object-contain"
        />
      </div>

      
      <h2 className="font-bold text-xl"> WATCH</h2>
      <p className="text-red-500 text-sm font-semibold tracking-wide mb-1">SERIES 7</p>
      <p className="text-gray-700 font-medium mb-2">Heavy on Features. <br /> Light on Price.</p>

      <div className="text-sm text-gray-500 mb-1">Only for:</div>
      <div className="inline-block bg-yellow-300 text-black font-bold py-1 px-3 rounded text-sm mb-4">
        ${product.price} USD
      </div>

      
      <div className="flex flex-col gap-3">
        <button
          onClick={() =>
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: 1,
              image: product.image,
            })
          }
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 px-4 rounded flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} /> ADD TO CART
        </button>

        <button
          onClick={() => router.push(`/product/${product.slug}`)}
          className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 text-sm font-semibold py-2 px-4 rounded flex items-center justify-center gap-2"
        >
          VIEW DETAILS →
        </button>
      </div>
    </div>
  );
}
