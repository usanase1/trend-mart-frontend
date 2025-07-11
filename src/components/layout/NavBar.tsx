"use client";

import {
  ShoppingCart,
  Heart,
  User,
  Search,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  RefreshCw,
  Headset,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";
import LoginForm from "@/components/dashboard/LoginForm";
import CartModal from "../cart/CartModal";
import { useCart } from "@/context/CartContext";
import { useModal } from "@/hooks/useModal";
import { useWishlist } from "@/context/WishlistContext";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import WishlistModal from "../wishlist/WishlistModal";

type Category = {
  id: number;
  name: string;
};

export default function Navbar() {
  const [categories, setCategories] = useState<Category[]>([]);
  const { itemCount } = useCart();
  const { wishlistItems } = useWishlist();
  const countItems = wishlistItems.length;

  const loginModal = useModal();
  const cartModal = useModal();
  const wishlistModel = useModal();

  useEffect(() => {
    fetch("/product-mock.json")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories || []));
  }, []);

  return (
    <>
      <div className="bg-[#1B6392] text-white text-xs px-6 py-2">
        <div className="flex justify-between items-center">
          <span>Welcome to TrendMart online eCommerce store.</span>
          <div className="flex items-center gap-4">
            <span>Follow us:</span>
            <Link href="/">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="/">
              <Twitter className="w-4 h-4" />
            </Link>
            <Link href="/">
              <Instagram className="w-4 h-4" />
            </Link>
            <Link href="/">
              <Youtube className="w-4 h-4" />
            </Link>
            <Select
              className="bg-[#1B6392] text-white text-xs border-none outline-none"
              options={[
                { value: "Eng", label: "Eng" },
                { value: "Fr", label: "Fr" },
              ]}
            />
            <Select
              className="bg-[#1B6392] text-white text-xs border-none outline-none"
              options={[
                { value: "USD", label: "USD" },
                { value: "EUR", label: "EUR" },
              ]}
            />
          </div>
        </div>
        <hr className="border-t border-white mt-2" />
      </div>

      <div className="bg-[#1B6392] text-white py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide flex-shrink-0"
        >
          TrendMart
        </Link>

        <div className="flex w-full md:max-w-md rounded overflow-hidden">
          <Input
            type="text"
            placeholder="Search for anything..."
            className="px-4 py-2 flex-1 bg-white text-black outline-none rounded-none rounded-l"
          />
          <span className="bg-yellow-400 px-2 flex items-center justify-center rounded-none rounded-r">
            <Search className="text-black w-5 h-5" />
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Button
            onClick={cartModal.open}
            variant="icon"
            className="relative cursor-pointer"
          >
            <ShoppingCart className="w-6 h-6 hover:text-yellow-400 text-white" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Button>

           <Button
            onClick={wishlistModel.open}
            variant="icon"
            className="relative cursor-pointer"
          >
            <Heart className="w-6 h-6 hover:text-yellow-400 text-white" />
            {countItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {countItems}
              </span>
            )}
          </Button>
          <Button onClick={loginModal.open} variant="icon">
            <User className="w-6 h-6 hover:text-yellow-400 cursor-pointer" />
          </Button>
        </div>
      </div>

      <div className="bg-white text-black px-6 py-3 border-b">
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <DropdownMenu />
          <Button
            as="a"
            href="/track-order"
            variant="link"
            className="flex items-center gap-1 hover:text-[#1B6392] hover:underline"
            customColor="bg-white hover:text-gray-800"
          >
            <MapPin className="w-4 h-4" />
            Track Order
          </Button>
          <Button
            variant="link"
            className="flex items-center gap-1 hover:text-[#1B6392] hover:underline"
            customColor="bg-white hover:text-gray-800"
          >
            <RefreshCw className="w-4 h-4" /> Compare
          </Button>
          <Button
            variant="link"
            className="flex items-center gap-1 hover:text-[#1B6392] hover:underline"
            customColor="bg-white hover:text-gray-800"
          >
            <Headset className="w-4 h-4" /> Customer Support
          </Button>
          <Button
            variant="link"
            className="flex items-center gap-1 hover:text-[#1B6392] hover:underline"
            customColor="bg-white hover:text-gray-800"
          >
            <HelpCircle className="w-4 h-4" /> Need Help
          </Button>
        </div>
      </div>

      {loginModal.isOpen && (
        <div className="fixed top-24 right-6 z-50">
          <div className="relative bg-white w-[350px] p-6 rounded-xl shadow-lg border border-gray-200">
            <Button
              onClick={loginModal.close}
              variant="icon"
              className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-xl font-bold"
            >
              ×
            </Button>
            <LoginForm />
          </div>
        </div>
      )}

     {cartModal.isOpen && (
  <CartModal isOpen={true} onClose={cartModal.close} />
)}

{wishlistModel.isOpen && (
  <WishlistModal isOpen={true} onClose={wishlistModel.close} />
)}

<div className="hidden">
  {categories.map((category) => (
    <span key={category.id}>{category.name}</span>
  ))}
</div>

    </>
  );
}
