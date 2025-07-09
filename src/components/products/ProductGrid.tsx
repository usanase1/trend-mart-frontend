import React from "react";
import { Product } from "@/landing/Home";
import { ProductGridProps } from '@/types/products';

const ProductGrid: React.FC<ProductGridProps> = ({ products, gridClassName = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", renderCard }) => (
  <div className={gridClassName}>
    {products.map((product) => renderCard(product))}
  </div>
);

export default ProductGrid; 