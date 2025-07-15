import React from "react";
import Image from "next/image";
import { Heart, Eye } from "lucide-react";
import Button from '@/components/ui/Button';
import { Product } from '@/types/products';

interface HeroDealCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onView?: (product: Product) => void;
  onWishlist?: (product: Product) => void;
}

const HeroDealCard: React.FC<HeroDealCardProps> = ({ product, onAddToCart, onView, onWishlist }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center max-w-xs w-full">
    <div className="w-full flex justify-center mb-4">
      <Image src={product.image} alt={product.name} width={180} height={180} className="object-contain" />
    </div>
    <div className="flex items-center text-yellow-500 text-xs font-semibold mb-1">
      {"★".repeat(5)}
      <span className="text-gray-500 ml-2">({product.reviews.toLocaleString()})</span>
    </div>
    <h2 className="text-base font-bold mb-1 text-center line-clamp-2">{product.name}</h2>
    <div className="flex items-center gap-2 mb-1">
      <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
      <span className="text-blue-600 font-bold text-lg">${product.price}</span>
    </div>
    <p className="text-xs text-gray-600 mb-4 text-center line-clamp-2">{product.description}</p>
    <div className="flex items-center w-full gap-2 mt-auto">
      <Button
        variant="outline"
        size="sm"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-200 hover:text-red-500 transition"
        onClick={onWishlist ? () => onWishlist(product) : undefined}
      >
        <Heart size={18} />
      </Button>
      <Button
        variant="primary"
        size="md"
        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded"
        onClick={onAddToCart ? () => onAddToCart(product) : undefined}
      >
        Add to Cart
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-200 hover:text-blue-600 transition"
        onClick={onView ? () => onView(product) : undefined}
      >
        <Eye size={18} />
      </Button>
    </div>
  </div>
);

export default HeroDealCard; 