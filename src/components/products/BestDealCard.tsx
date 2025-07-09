import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import React from "react";
import { Product } from "@/landing/Home";
import { BestDealCardProps } from '@/types/products';
import Button from '@/components/ui/Button';
import ProductHoverActions from './ProductHoverActions';

const BestDealCard: React.FC<BestDealCardProps> = ({ product, onAddToCart, onView }) => (
  <div className="relative rounded-lg p-4 bg-white shadow group transition hover:shadow-md">
    {/* Discount/Badge */}
    {product.discount >= 20 && (
      <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded z-10">
        {product.discount}% OFF
      </div>
    )}
    {product.discount === 0 && (
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded z-10">
        HOT
      </div>
    )}
    {product.discount >= 10 && product.discount < 20 && (
      <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded z-10">
        BEST DEALS
      </div>
    )}
    {product.discount > 0 && product.discount < 10 && (
      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded z-10">
        SALE
      </div>
    )}
    <div className="w-full h-40 relative mb-3 group">
      <a href={`/product/${product.slug}`}>
        <Image src={product.image} alt={product.name} fill className="object-contain" />
      </a>
      <ProductHoverActions
        product={product}
        onAddToCart={onAddToCart}
        onView={() => window.location.assign(`/shop-page/products/${product.id}`)}
      />
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
);

export default BestDealCard; 