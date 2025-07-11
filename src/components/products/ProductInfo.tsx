"use client";

import { ShoppingCart, Heart, RefreshCw, Share2, Minus, Plus } from "lucide-react";
import Button from "@/components/ui/Button";
import { useState } from "react";

interface ProductInfoProps {
  product: {
    name: string;
    price: number;
    originalPrice: number;
    discount: number;
    inStock: boolean;
    sku: string;
    brand: string;
    category: string;
  };
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-3 text-[13px] text-gray-700">
      {/* Rating */}
      <div className="flex items-center gap-1 text-gray-800">
        <span className="text-orange-500 text-sm">★ ★ ★ ★ ★</span>
        <span className="font-medium">4.7 Star Rating</span>
        <span className="text-gray-500 text-xs">(21,671 User feedback)</span>
      </div>

      {/* Title */}
      <h1 className="text-[16px] font-semibold text-gray-900 leading-tight">{product.name}</h1>

      {/* SKU, Brand, Category, Availability */}
      <div className="grid grid-cols-2 text-xs gap-1">
        <span>Sku: <b>{product.sku}</b></span>
        <span>Availability: <span className="text-green-600">In Stock</span></span>
        <span>Brand: <b>{product.brand}</b></span>
        <span>Category: <b>{product.category}</b></span>
      </div>

      {/* Pricing */}
      <div className="flex items-center gap-2 mt-1">
        <span className="text-lg text-blue-600 font-bold">${product.price}</span>
        <span className="line-through text-gray-400 text-sm">${product.originalPrice}</span>
        <span className="bg-yellow-400 text-white px-2 py-0.5 text-[11px] rounded">{product.discount}% OFF</span>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3 mt-3">
        <div>
          <label className="block mb-0.5 font-medium text-xs">Color</label>
          <div className="flex gap-2">
            <div className="w-5 h-5 rounded-full border-2 border-orange-500 bg-gray-300 cursor-pointer"></div>
            <div className="w-5 h-5 rounded-full border border-gray-300 bg-gray-100 cursor-pointer"></div>
          </div>
        </div>

        <div>
          <label className="block mb-0.5 font-medium text-xs">Size</label>
          <select className="w-full border px-2 py-1 rounded text-sm">
            <option>14-inch Liquid Retina XDR display</option>
          </select>
        </div>

        <div>
          <label className="block mb-0.5 font-medium text-xs">Memory</label>
          <select className="w-full border px-2 py-1 rounded text-sm">
            <option>16GB unified memory</option>
          </select>
        </div>

        <div>
          <label className="block mb-0.5 font-medium text-xs">Storage</label>
          <select className="w-full border px-2 py-1 rounded text-sm">
            <option>1TV SSD Storage</option>
          </select>
        </div>
      </div>

      {/* Quantity and Buttons */}
      <div className="flex items-center gap-3 mt-4">
        <div className="flex items-center border rounded px-2 py-1">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>
            <Minus className="w-4 h-4" />
          </button>
          <span className="mx-2 text-sm">{quantity.toString().padStart(2, "0")}</span>
          <button onClick={() => setQuantity(q => q + 1)}>
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <Button variant="primary" size="sm" className="flex-1 text-sm px-4 py-2">
          <ShoppingCart className="w-4 h-4 mr-1" /> ADD TO CARD
        </Button>

        <Button variant="outline" size="sm" className="border-orange-500 text-orange-500 px-4 py-2 text-sm">
          BUY NOW
        </Button>
      </div>

      {/* Icons row */}
      <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-gray-600">
        <div className="flex items-center gap-1">
          <Heart className="w-4 h-4" /> Add to Wishlist
        </div>
        <div className="flex items-center gap-1">
          <RefreshCw className="w-4 h-4" /> Add to Compare
        </div>
        <div className="flex items-center gap-1">
          Share product:
          <span className="flex gap-1 text-gray-500 text-xs">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-instagram" />
            <i className="fab fa-twitter" />
            <i className="fab fa-pinterest-p" />
          </span>
        </div>
      </div>

      {/* Checkout guarantee */}
      <div className="mt-3">
        <p className="text-xs font-medium mb-1">100% Guarantee Safe Checkout</p>
        <img src="/checkout-icons.png" alt="Payment Methods" className="h-4" />
      </div>
    </div>
  );
}
