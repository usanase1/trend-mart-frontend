"use client";

import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function CartSummary() {
  const { cartTotal } = useCart();
  const [coupon, setCoupon] = useState("");

  const tax = 61.99;
  const discount = 24;
  const shipping = 0;
  const total = cartTotal - discount + tax;

  return (
    <div className="w-full border p-6 rounded-lg bg-white shadow-md">
      <h3 className="text-xl font-semibold mb-4">Card Totals</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Sub-total</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span>-${discount}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-between mt-4 font-bold text-lg">
        <span>Total</span>
        <span>${total.toFixed(2)} USD</span>
      </div>

      <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded">
        PROCEED TO CHECKOUT →
      </Button>

      <div className="mt-6 border-t pt-4">
        <h4 className="mb-2 font-medium">Coupon Code</h4>
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter coupon"
          className="w-full border px-3 py-2 rounded mb-2"
        />
        <Button className="bg-blue-600 text-white w-full">APPLY COUPON</Button>
      </div>
    </div>
  );
}
