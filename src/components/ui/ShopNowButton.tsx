"use client";

import Button from "@/components/ui/Button";
import React from "react";

const ShopNowButton: React.FC = () => (
  <Button
    as="a"
    href="/shop"
    className="w-fit min-w-0 px-4 py-2 mx-0"
    variant="primary"
    size="md"
  >
    Shop Now <span className="ml-2">→</span>
  </Button>
);

export default ShopNowButton; 