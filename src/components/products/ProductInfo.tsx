"use client";

import { ShoppingCart, Heart } from "lucide-react";

interface ProductInfoProps {
  product: any;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <div className="flex items-center gap-4">
        <span className="text-lg text-orange-500">${product.price}</span>
        <span className="text-gray-500 line-through">${product.originalPrice}</span>
        <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs">
          {product.discount}% OFF
        </span>
      </div>

      <div className="flex gap-4">
        <button className="bg-orange-500 text-white px-6 py-2 rounded flex items-center gap-2">
          <ShoppingCart className="w-4 h-4" /> Add to Cart
        </button>
        <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded flex items-center gap-2">
          Buy Now
        </button>
      </div>

      <div className="flex gap-2 text-sm">
        <span>Availability: {product.inStock ? <span className="text-green-500">In Stock</span> : "Out of Stock"}</span>
        <span>| SKU: {product.sku}</span>
      </div>

      <div className="flex gap-2 text-sm text-gray-600">
        <Heart className="w-4 h-4" /> Add to Wishlist
      </div>
    </div>
  );
}
