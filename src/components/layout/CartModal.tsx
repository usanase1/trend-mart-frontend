"use client";

import { ShoppingCart, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
// import Link from "next/link";
import Button from "@/components/ui/Button";

export default function CartModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>

      <div className="fixed top-4 right-4 w-full max-w-sm bg-white rounded-lg shadow-xl z-50">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-blue-600" />
            <h3 className="font-bold text-lg">
              Shopping Cart (
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)})
            </h3>
          </div>
          <Button onClick={onClose} variant="outline" size="sm">
            <X size={20} />
          </Button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Your cart is empty
            </div>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex gap-4 border-b pb-4">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <Button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          variant="outline"
                          size="sm"
                        >
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          variant="outline"
                          size="sm"
                        >
                          +
                        </Button>
                      </div>
                      <span className="font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    <Button
                      onClick={() => removeFromCart(item.id)}
                      variant="outline"
                      size="sm"
                      color="red"
                    >
                      Remove
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="p-4 border-t">
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Sub-Total:</span>
            <span>${cartTotal.toFixed(2)} USD</span>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              onClick={onClose}
              href="/checkout"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium text-center"
            >
              CHECKOUT NOW →
            </Button>
            <Button
              onClick={onClose}
              href="/cart"
              className="border border-gray-300 hover:bg-gray-50 py-3 rounded-lg font-medium text-center"
            >
              VIEW CART
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
