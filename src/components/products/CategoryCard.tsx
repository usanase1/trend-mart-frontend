import Image from "next/image";
import React from "react";
import { CategoryCardProps } from '@/types/shops';

const CategoryCard: React.FC<CategoryCardProps> = ({ image, name, onClick }) => (
  <div
    className="min-w-[160px] bg-white dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-md transition cursor-pointer"
    onClick={onClick}
  >
    <Image src={image} alt={name} width={100} height={100} className="mb-2 object-contain" />
    <p className="text-center text-sm font-medium">{name}</p>
  </div>
);

export default CategoryCard; 