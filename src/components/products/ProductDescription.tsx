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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-gray-800">
      {/* Description */}
      <div className="lg:col-span-2">
        <h2 className="text-xl font-semibold mb-3">Description</h2>
        <p className="text-gray-700 mb-6">{product.description}</p>

        <h2 className="text-xl font-semibold mb-3">Features</h2>
        <ul className="list-disc list-inside space-y-1">
          {product.features.map((feature: string, idx: number) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Shipping Info */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Shipping Information</h2>
        <ul className="text-sm space-y-2">
          <li>Courier: 2–4 days, free shipping</li>
          <li>Local Shipping: up to one week, $19.00</li>
          <li>UPS Ground Shipping: 4–6 days, $29.00</li>
          <li>Unishop Global Export: 3–4 days, $39.00</li>
        </ul>

        <div className="mt-4 space-y-1">
          <p>✅ Free 1 Year Warranty</p>
          <p>✅ Free Shipping & Fast Delivery</p>
          <p>✅ 100% Money-back guarantee</p>
          <p>✅ 24/7 Customer support</p>
          <p>✅ Secure payment method</p>
        </div>
      </div>
    </div>
  );
}
