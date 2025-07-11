"use client";

import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import ProductDescription from "./ProductDescription";
import DealCategoriesSection from "../home/DealCategoriesSection";
import { Product } from '@/types/products';

type ExtendedProduct = Product & {
  features: string[];
  shipping: {
    estimatedDays: number;
    free: boolean;
  };
  images?: string[];
  sku: string;
};

type Props = {
  product: ExtendedProduct;
};

export default function ProductDetails({ product }: Props) {
  return (
   
    <div>
    <div className="max-w-[1300px] mx-auto px-4 py-12">
  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ProductImages images={[product.image, ...(product.images || [])]} />
        <ProductInfo product={product} />
      </div>

    
      <div className="mt-16 border-t pt-10">
        <ProductDescription product={product} />
      </div>
    </div>
    <DealCategoriesSection/>
    </div>
    
  );
}
