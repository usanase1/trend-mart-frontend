"use client";
import { useCart } from "@/context/CartContext";
import ProductTable from "@/components/cart/ProductTable.tsx";
import CartSummary from "@/components/cart/CartSummary";

export default function ShoppingCartPage() {
  const { cartItems } = useCart();

  return (
    <main className="min-h-screen p-6 bg-gray-50 ">
       <h1 className="text-xl font-bold mb-6">Shopping Cart</h1>
       <div className="flex flex-row">
      <div className="max-w-6xl mx-auto border border-blue-200 p-6 rounded">
        <ProductTable items={cartItems} type="cart" />
        </div>
        <div>
         <CartSummary/>
      </div>
      </div>

        
      
    </main>
  );
}
