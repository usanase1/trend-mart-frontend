"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

type BreadcrumbProps = {
  current?: string;
};

export default function Breadcrumb({ current }: BreadcrumbProps) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    ...segments.slice(0, -1).map((seg, i) => ({
      label: decodeURIComponent(seg.replace(/-/g, " ")),
      href: "/" + segments.slice(0, i + 1).join("/"),
    })),
    {
      label: current || decodeURIComponent(segments[segments.length - 1] || ""),
      // ❌ No href for the last crumb — it’s not a link
    },
  ];

  return (
    <nav className="text-sm text-gray-600 mb-4">
      <ol className="flex items-center space-x-2">
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center">
            {crumb.href ? (
              <Link href={crumb.href} className="text-blue-600 hover:underline capitalize">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-gray-800 font-medium capitalize">{crumb.label}</span>
            )}
            {i < crumbs.length - 1 && (
              <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
