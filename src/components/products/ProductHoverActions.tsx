import React from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import ProductActionButton from '@/components/ui/ProductActionButton';
import { Product } from '@/types/products';

interface ProductHoverActionsProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onView?: (product: Product) => void;
  onWishlist?: (product: Product) => void;
}

const ProductHoverActions: React.FC<ProductHoverActionsProps> = ({
  product,
  onAddToCart,
  onView,
  onWishlist,
}) => (
  <div className="absolute inset-0 bg-black/10 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition duration-300 z-10">
    <ProductActionButton
      icon={<Heart size={16} />}
      ariaLabel="Add to Wishlist"
      variant="outline"
      colorClass="bg-white text-gray-600 hover:text-red-500"
      onClick={onWishlist ? () => onWishlist(product) : undefined}
    />
    <ProductActionButton
      icon={<ShoppingCart size={16} />}
      ariaLabel="Add to Cart"
      variant="primary"
      colorClass="bg-orange-500 text-white hover:bg-orange-600"
      onClick={onAddToCart ? () => onAddToCart(product) : undefined}
    />
    <ProductActionButton
      icon={<Eye size={16} />}
      ariaLabel="View Details"
      variant="secondary"
      colorClass="bg-white text-gray-600 hover:text-blue-600"
      onClick={onView ? () => onView(product) : undefined}
    />
  </div>
);

export default ProductHoverActions; 