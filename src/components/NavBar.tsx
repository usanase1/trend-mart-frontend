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
} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
    
      <div className="bg-black text-white text-sm flex justify-between items-center px-6 py-2">
        <div>
          <span className="bg-yellow-400 text-black px-2 py-0.5 font-semibold rounded">Black</span> Friday
          <span className="ml-2">Up to <span className="text-yellow-400 font-bold">59%</span> OFF</span>
        </div>
        <Link href="#" className="bg-yellow-400 text-black px-4 py-1 rounded font-medium text-sm hover:bg-yellow-300 transition">
          SHOP NOW →
        </Link>
      </div>

     
      <div className="bg-[#1B6392] text-white text-xs flex justify-between px-6 py-2">
        <span>Welcome to TrendMart online eCommerce store.</span>
        <div className="flex items-center gap-4">
          <span>Follow us:</span>
         <Link href={"/"}> <Facebook className="w-4 h-4" /></Link>
          <Link href={"/"}><Twitter className="w-4 h-4" /></Link>
          <Link href={"/"}><Instagram className="w-4 h-4" /></Link>
          <Link href={"/"}><Youtube className="w-4 h-4" /></Link>
          <select className="bg-[#1B6392] text-white text-xs">
            <option>Eng</option>
            <option>Fr</option>
          </select>
          <select className="bg[#1B6392] text-white text-xs">
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>

      
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
    </>
  );
}
