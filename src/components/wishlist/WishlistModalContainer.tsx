"use client";
import { useState } from "react";
import WishlistModal from "./WishlistModal";

export default function WishlistModalContainer() {
  const [isOpen, setIsOpen] = useState(false);

  return <WishlistModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}
