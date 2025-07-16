"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Users,
  Package,
  Truck,
  Layers,
  Settings,
  Plus,
  UserCircle,
} from "lucide-react";

const navItems = [
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Stocks", href: "/admin/stocks", icon: Layers },
  { label: "Deliverymen", href: "/admin/deliverymen", icon: Truck },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
    children: [
      { label: "Edit Profile", href: "/admin/settings/profile", icon: UserCircle },
      { label: "Add Admin", href: "/admin/settings/new-admin", icon: Plus },
    ],
  },
];

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 flex flex-col">
        <div className="text-2xl font-bold text-green-500 p-6 border-b border-gray-700">
          TrendMart Admin
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map(({ label, href, icon: Icon, children }) => (
            <div key={label}>
              <Link
                href={href}
                className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-700 ${
                  pathname.startsWith(href) ? "bg-gray-700" : ""
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </Link>
              {pathname.startsWith(href) && children && (
                <div className="ml-6 mt-1 space-y-1 text-sm">
                  {children.map(({ label, href, icon: SubIcon }) => (
                    <Link
                      key={label}
                      href={href}
                      className={`flex items-center gap-2 px-3 py-1 rounded hover:bg-gray-700 ${
                        pathname === href ? "bg-gray-700" : ""
                      }`}
                    >
                      <SubIcon className="w-4 h-4" />
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-900 p-6 overflow-auto">{children}</main>
    </div>
  );
}
