"use client";

import { Heart } from "lucide-react";
import ProductModal from "../layout/ProductModal";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function WishlistModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <ProductModal
      isOpen={isOpen}
      onClose={onClose}
      title="Wishlist"
      icon={<Heart className="text-pink-500" />}
      items={wishlistItems}
      showQuantity={false}
      showSubtotal={false}
      viewPageHref="/wishlist"
      emptyMessage="Your wishlist is empty"
      onRemove={removeFromWishlist}
      onActionClick={addToCart}
      actionButtonText="Add to Cart"
    />
  );
}
