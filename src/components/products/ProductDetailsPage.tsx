"use client";

import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import ProductDescription from "./ProductDescription";
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductImages images={[product.image, ...(product.images || [])]} />
        <ProductInfo product={product} />
      </div>

      <ProductDescription product={product} />
    </div>
  );
}
