"use client";
import { useWishlist } from "@/context/WishlistContext";
import ProductTable from "@/components/cart/ProductTable.tsx";

export default function WishlistPage() {
  const { wishlistItems } = useWishlist();

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto border-2 border-blue-300 p-6 rounded">
        <h1 className="text-xl font-bold mb-6">Wishlist</h1>
        {wishlistItems.length === 0 ? (
          <p className="text-gray-500">Your wishlist is empty.</p>
        ) : (
          <ProductTable items={wishlistItems} type="wishlist" />
        )}
      </div>
    </main>
  );
}
