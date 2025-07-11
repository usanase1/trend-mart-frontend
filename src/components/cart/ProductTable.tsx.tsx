"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { CartItem } from "@/types/cart";

export default function ProductTable({
  items,
  type,
}: {
  items: CartItem[];
  type: "cart" | "wishlist";
}) {
  const { updateQuantity, removeFromCart, addToCart } = useCart();
  const { removeFromWishlist } = useWishlist();

  const isCart = type === "cart";

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full table-auto border">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-4">PRODUCTS</th>
            <th className="p-4">PRICE</th>
            {isCart && <th className="p-4">QUANTITY</th>}
            {isCart && <th className="p-4">SUB-TOTAL</th>}
            {!isCart && <th className="p-4">STOCK STATUS</th>}
            <th className="p-4">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const outOfStock = item.stock === 0;

            return (
              <tr key={item.id} className="border-b">
                <td className="p-4 flex gap-4 items-center">
                  <button
                    onClick={() =>
                      isCart
                        ? removeFromCart(item.id)
                        : removeFromWishlist(item.id)
                    }
                    className="text-red-500 hover:text-red-700"
                  >
                    ❌
                  </button>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                  <span>{item.name}</span>
                </td>

                <td className="p-4 text-gray-700 font-semibold">
                  {item.originalPrice && (
                    <span className="line-through text-gray-400 mr-2">
                      ${item.originalPrice}
                    </span>
                  )}
                  ${item.price}
                </td>

                {isCart && (
                  <>
                    <td className="p-4">
                      <div className="flex items-center border rounded w-fit">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-2 py-1"
                        >
                          -
                        </button>
                        <span className="px-4">
                          {item.quantity.toString().padStart(2, "0")}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-2 py-1"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="p-4 font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </>
                )}

                {!isCart && (
                  <td className="p-4">
                    {outOfStock ? (
                      <span className="text-red-500 font-medium">
                        OUT OF STOCK
                      </span>
                    ) : (
                      <span className="text-green-600 font-medium">
                        IN STOCK
                      </span>
                    )}
                  </td>
                )}

                <td className="p-4">
                  {isCart ? (
                    <Button className="bg-blue-600 text-white px-4 py-2 rounded">
                      UPDATE CART
                    </Button>
                  ) : (
                    <Button
                      onClick={() => addToCart(item)}
                      disabled={outOfStock}
                      className={`${
                        outOfStock
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-orange-500 hover:bg-orange-600 text-white"
                      } px-4 py-2 rounded`}
                    >
                      ADD TO CART
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {isCart && (
        <div className="flex justify-between mt-6">
          <Link
            href="/"
            className="px-4 py-2 border text-blue-600 rounded hover:bg-gray-100"
          >
            ← RETURN TO SHOP
          </Link>
          <Button className="bg-blue-600 text-white px-6 py-2 rounded">
            UPDATE CART
          </Button>
        </div>
      )}
    </div>
  );
}
