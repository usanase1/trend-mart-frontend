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
import LoginForm from "./LoginForm";
import CartModal from "./CartModal";
import { useCart } from "@/context/CartContext";
import { useModal } from "@/hooks/useModal";

type Category = {
  id: number;
  name: string;
};

export default function Navbar() {
  const [categories, setCategories] = useState<Category[]>([]);
  const { itemCount } = useCart();

  const loginModal = useModal();
  const cartModal = useModal();

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
            <select className="bg-[#1B6392] text-white text-xs border-none outline-none">
              <option>Eng</option>
              <option>Fr</option>
            </select>
            <select className="bg-[#1B6392] text-white text-xs border-none outline-none">
              <option>USD</option>
              <option>EUR</option>
            </select>
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

        <div className="flex w-full md:max-w-md rounded overflow-hidden bg-white">
          <input
            type="text"
            placeholder="Search for anything..."
            className="px-4 py-2 w-full text-black outline-none"
          />
          <button className="bg-yellow-400 px-4">
            <Search className="text-black w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-6">
          <button onClick={cartModal.open} className="relative cursor-pointer">
            <ShoppingCart className="w-6 h-6 hover:text-yellow-400 text-black" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>

          <Link href="/wishlist">
            <Heart className="w-6 h-6 hover:text-yellow-400" />
          </Link>

          <button onClick={loginModal.open}>
            <User className="w-6 h-6 hover:text-yellow-400 cursor-pointer" />
          </button>
        </div>
      </div>

      <div className="bg-white text-black px-6 py-3 border-b">
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <DropdownMenu />
          <Link href="/pages/TrackOrder">
          <button className="flex items-center gap-1 hover:text-[#1B6392]">
            <MapPin className="w-4 h-4" /> Track Order
          </button>
          </Link>
          <button className="flex items-center gap-1 hover:text-[#1B6392]">
            <RefreshCw className="w-4 h-4" /> Compare
          </button>
          <button className="flex items-center gap-1 hover:text-[#1B6392]">
            <Headset className="w-4 h-4" /> Customer Support
          </button>
          <button className="flex items-center gap-1 hover:text-[#1B6392]">
            <HelpCircle className="w-4 h-4" /> Need Help
          </button>
        </div>
      </div>

      {loginModal.isOpen && (
        <div className="fixed top-24 right-6 z-50">
          <div className="relative bg-white w-[350px] p-6 rounded-xl shadow-lg border border-gray-200">
            <button
              onClick={loginModal.close}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-xl font-bold"
            >
              ×
            </button>
            <LoginForm />
          </div>
        </div>
      )}

      {cartModal.isOpen && (
        <CartModal isOpen={true} onClose={cartModal.close} />
      )}
    </>
  );
}
