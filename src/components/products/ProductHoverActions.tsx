import React from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import ProductActionButton from '@/components/ui/ProductActionButton';
import { Product } from '@/landing/Home';

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
      onClick={onWishlist ? () => onWishlist(product) : undefined}
    />
    <ProductActionButton
      icon={<ShoppingCart size={16} />}
      ariaLabel="Add to Cart"
      variant="primary"
      onClick={onAddToCart ? () => onAddToCart(product) : undefined}
    />
    <ProductActionButton
      icon={<Eye size={16} />}
      ariaLabel="View Details"
      variant="secondary"
      onClick={onView ? () => onView(product) : undefined}
    />
  </div>
);

export default ProductHoverActions; 