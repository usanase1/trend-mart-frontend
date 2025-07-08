'use client';

import { Home, Truck, ShoppingCart, Heart, CreditCard, History, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';

const links = [
  { label: 'Dashboard', icon: <Home />, href: '/dashboard' },
  { label: 'Order History', icon: <History />, href: '/dashboard/history' },
  { label: 'Track Order', icon: <Truck />, href: '/dashboard/trackorder' },
  { label: 'Shopping Cart', icon: <ShoppingCart />, href: '/cart' },
  { label: 'Wishlist', icon: <Heart />, href: '/wishlist' },
  { label: 'Cards & Address', icon: <CreditCard />, href: '/dashboard/cards' },
  { label: 'Browsing History', icon: <History />, href: '/dashboard/browsing-history' },
  { label: 'Settings', icon: <Settings />, href: '/dashboard/settings' },
];

export default function Sidebar() {
  return (
    <aside className="w-60 bg-white p-4 border-r space-y-2 h-screen">
      {links.map((item, idx) => (
        <Link
          key={idx}
          href={item.href}
          className="flex items-center gap-3 text-gray-700 hover:text-blue-600 px-2 py-2 rounded hover:bg-gray-50 transition"
        >
          <span className="w-5 h-5">{item.icon}</span>
          {item.label}
        </Link>
      ))}
      <button className="flex items-center gap-3 text-red-600 px-2 py-2 w-full hover:bg-red-50 transition">
        <LogOut size={18} />
        Log-out
      </button>
    </aside>
  );
}
