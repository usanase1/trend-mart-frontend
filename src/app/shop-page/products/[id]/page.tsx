"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductDetails from "@/components/products/ProductDetailsPage";
import Breadcrumb from "@/components/ui/Breadcrumb";

type Product = {
  id: number | string;
  name: string;
  price: number;
  description: string;
  image: string;
  category?: string;
  [key: string]: any;
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch("/product-mock.json")
      .then((res) => res.json())
      .then((data) => {
        const found: Product | undefined = data.products.find(
          (p: Product) => String(p.id) === String(id)
        );
        if (found) setProduct(found);
      });
  }, [id]);

  if (!product) {
    return <div className="text-center py-20">Loading product...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <Breadcrumb current={product.name} />
      <ProductDetails product={product} />
    </div>
  );
}
