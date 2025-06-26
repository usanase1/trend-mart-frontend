/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

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
  HelpCircle
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";

type Category = {
  id: number;
  name: string;
};

export default function Navbar() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/product-mock.json")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories || []));
  }, []);

  return (
    <>
      {/* Top Black Friday Banner */}
      <div className="bg-black text-white text-sm flex justify-between items-center px-6 py-2">
        <div>
          <span className="bg-yellow-400 text-black px-2 py-0.5 font-semibold rounded">Black</span> Friday
          <span className="ml-2">Up to <span className="text-yellow-400 font-bold">59%</span> OFF</span>
        </div>
        <Link
          href="#"
          className="bg-yellow-400 text-black px-4 py-1 rounded font-medium text-sm hover:bg-yellow-300 transition flex items-center gap-1"
        >
          SHOP NOW →
        </Link>
      </div>

      {/* Welcome / Socials */}
      <div className="bg-[#1B6392] text-white text-xs px-6 py-2">
        <div className="flex justify-between items-center">
          <span>Welcome to TrendMart online eCommerce store.</span>
          <div className="flex items-center gap-4">
            <span>Follow us:</span>
            <Link href="/"><Facebook className="w-4 h-4" /></Link>
            <Link href="/"><Twitter className="w-4 h-4" /></Link>
            <Link href="/"><Instagram className="w-4 h-4" /></Link>
            <Link href="/"><Youtube className="w-4 h-4" /></Link>
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

      {/* Main Logo + Search + Icons */}
      <div className="bg-[#1B6392] text-white py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="text-2xl font-bold tracking-wide flex-shrink-0">
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
          <Link href="/cart">
            <ShoppingCart className="w-6 h-6 hover:text-yellow-400" />
          </Link>
          <Link href="/wishlist">
            <Heart className="w-6 h-6 hover:text-yellow-400" />
          </Link>
          <Link href="/account">
            <User className="w-6 h-6 hover:text-yellow-400" />
          </Link>
        </div>
      </div>

     
<div className="bg-white text-black px-6 py-3 border-b">
  <div className="flex flex-wrap items-center gap-6 text-sm">
      <DropdownMenu/>

    <button className="flex items-center gap-1 hover:text-[#1B6392]">
      <MapPin className="w-4 h-4" /> Track Order
    </button>
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

    </>
  );
}

