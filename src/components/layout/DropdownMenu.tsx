"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

type Product = {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  image: string;
};

export default function CategoryDropdown() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState<string | null>(
    null
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/product-mock.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setHoveredCategory(null);
        setHoveredSubcategory(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const getSubcategories = (category: string) => {
    return Array.from(
      new Set(
        products
          .filter((p) => p.category === category)
          .map((p) => p.subcategory)
      )
    );
  };

  const getProducts = (category: string, subcategory: string) => {
    return products.filter(
      (p) => p.category === category && p.subcategory === subcategory
    );
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white text-black border px-4 py-2 rounded hover:border-gray-400 visited:color-orange"
      >
        All Categories
      </Button>

      {isOpen && (
        <div className="absolute z-50 mt-2 flex bg-white shadow-lg border text-sm">
          <div className="min-w-[200px] border-r bg-white">
            {categories.map((category) => (
              <div
                key={category}
                onMouseEnter={() => {
                  setHoveredCategory(category);
                  setHoveredSubcategory(null);
                }}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  hoveredCategory === category ? "bg-gray-100" : ""
                }`}
              >
                {category}
              </div>
            ))}
          </div>

          {hoveredCategory && (
            <div className="min-w-[200px] border-r bg-white">
              {getSubcategories(hoveredCategory).map((sub) => (
                <div
                  key={sub}
                  onMouseEnter={() => setHoveredSubcategory(sub)}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                    hoveredSubcategory === sub ? "bg-gray-100" : ""
                  }`}
                >
                  {sub}
                </div>
              ))}
            </div>
          )}

          {hoveredCategory && hoveredSubcategory && (
            <div className="min-w-[300px] max-w-[400px] p-3 overflow-y-auto max-h-[350px] bg-white">
              {getProducts(hoveredCategory, hoveredSubcategory).map((prod) => (
                <div
                  key={prod.id}
                  className="flex items-center gap-2 mb-3 border-b pb-2"
                >
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    width={40}
                    height={40}
                    className="object-cover rounded"
                  />
                  <div>
                    <p className="font-medium text-sm">{prod.name}</p>
                    <p className="text-xs text-[#2DA5F3]">${prod.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
