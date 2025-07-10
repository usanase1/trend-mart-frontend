"use client";

import Button from "@/components/ui/Button";
import React from "react";

const ShopNowButton: React.FC = () => (
  <Button as="a" href="/shop" variant="primary" size="md" fullWidth={false}>
    SHOP NOW 
  </Button>
);

export default ShopNowButton; 