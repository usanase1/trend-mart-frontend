import React from "react";
import { ProductListCardProps } from "@/types/products";
import Image from 'next/image';

const ProductListCard: React.FC<ProductListCardProps> = ({ product, onClick }) => (
  <div
    className="flex items-center gap-4 bg-white dark:bg-gray-800 p-3 rounded shadow-sm hover:shadow-md transition cursor-pointer"
    onClick={() => onClick && onClick(product)}
  >
    <div className="relative w-20 h-20 flex-shrink-0">
      <Image src={product.image} alt={product.name} fill className="object-contain" />
    </div>
    <div>
      <h4 className="text-sm font-medium line-clamp-2">{product.name}</h4>
      <p className="text-blue-600 font-bold text-sm">${product.price}</p>
    </div>
  </div>
);

export default ProductListCard; 