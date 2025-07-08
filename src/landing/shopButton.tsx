"use client";

import Link from "next/link";
import React from "react";

export default function ShopNowButton() {
  return (
    <Link href="/shop">
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded text-sm">
        SHOP NOW →
      </button>
    </Link>
  );
}
