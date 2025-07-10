"use client";
import { Product } from '@/types/products';


interface ExtendedProduct extends Product {
  features: string[];
  shipping: {
    estimatedDays: number;
    free: boolean;
  };
}

interface ProductDescriptionProps {
  product: ExtendedProduct;
}


export default function ProductDescription({ product }: ProductDescriptionProps) {
  return (
    <div className="mt-10">
      <div className="border-b pb-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700">{product.description}</p>
      </div>

      <div className="border-b pb-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside text-gray-700">
          {product.features.map((feature: string, idx: number) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
        <p className="text-gray-700">Estimated Delivery: {product.shipping.estimatedDays} days</p>
        {product.shipping.free && <p className="text-green-600">Free Shipping Available</p>}
      </div>
    </div>
  );
}
