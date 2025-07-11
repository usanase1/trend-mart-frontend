"use client";

import { ShoppingCart } from "lucide-react";
import ProductModal from "../layout/ProductModal";
import { useCart } from "@/context/CartContext";

export default function CartModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <ProductModal
      isOpen={isOpen}
      onClose={onClose}
      title="Shopping Cart"
      icon={<ShoppingCart className="text-blue-600" />}
      items={cartItems}
      showQuantity
      showSubtotal
      viewPageHref="/shoping-cart"
      emptyMessage="Your cart is empty"
      onIncrement={(id) => updateQuantity(id, getQty(id) + 1)}
      onDecrement={(id) => updateQuantity(id, getQty(id) - 1)}
      onRemove={removeFromCart}
      totalAmount={cartTotal}
    />
  );

  function getQty(id: string) {
    return cartItems.find((i) => i.id === id)?.quantity || 0;
  }
}
