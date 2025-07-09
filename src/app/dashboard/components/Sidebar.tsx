'use client';

import {
  Home,
  Truck,
  ShoppingCart,
  Heart,
  CreditCard,
  History,
  Settings,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();

  return (
    <aside className="w-60 bg-white p-4 border-r border-gray-100 space-y-2 h-screen">
      {links.map((item, idx) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={idx}
            href={item.href}
            className={`flex items-center gap-3 px-2 py-2 rounded transition ${
              isActive
                ? 'bg-[#FA8232] text-white'
                : 'text-gray-700 hover:bg-gray-50 hover:text-[#FA8232]'
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.label}
          </Link>
        );
      })}
      <button className="flex items-center gap-3 text-red-600 px-2 py-2 w-full hover:bg-red-50 transition">
        <LogOut size={18} />
        Log-out
      </button>
    </aside>
  );
}
