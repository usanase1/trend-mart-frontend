"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

export default function ShopNowButton() {
  return (
    <Button as="a" href="/shop" variant="primary" size="md" fullWidth={false}>
      SHOP NOW →
    </Button>
  );
}
