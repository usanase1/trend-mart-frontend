"use client";
import { useState } from "react";
import CartModal from "./CartModal";

export default function CartModalContainer() {
  const [isOpen, setIsOpen] = useState(false);

  // Open/close could also be handled with global state (like Zustand)
  return <CartModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}
