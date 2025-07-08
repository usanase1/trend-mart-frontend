"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductDetails from "@/components/products/ProductDetailsPage";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function ProductDetailPage() {
  const { id } = useParams(); // get dynamic route param
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch("/product-mock.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.products.find((p: any) => String(p.id) === String(id));
        setProduct(found);
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
