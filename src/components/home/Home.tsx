"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import ProductBanner from "@/components/products/ProductBanner";
import FeatureHighlights from "@/components/ui/FeatureHighlights";
import BestDealCard from "@/components/products/BestDealCard";
import ProductGrid from "@/components/products/ProductGrid";
import CategoryCard from "@/components/products/CategoryCard";
import PromoBanner from "@/components/ui/PromoBanner";
import HeroDealCard from '@/components/products/HeroDealCard';
import ProductHoverActions from '@/components/products/ProductHoverActions';
import Button from '@/components/ui/Button';
import BestDealsSection from '@/components/home/BestDealsSection';
import CategorySection from '@/components/home/CategorySection';
import FeaturedProductsSection from '@/components/home/FeaturedProductsSection';
import ComputerAccessoriesSection from '@/components/home/ComputerAccessoriesSection';
import DealCategoriesSection from '@/components/home/DealCategoriesSection';
import LatestNewsSection from '@/components/home/LatestNewsSection';
import { Product } from './types';
import AppleHomePodMiniSection from './AppleHomePodMiniSection';
import MacbookProSection from './MacbookProSection';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    fetch("/product-mock.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []));
  }, []);
  const getUniqueCategories = () => {
    const seen = new Set();
    const result = [];

    for (const product of products) {
      if (!seen.has(product.subcategory)) {
        seen.add(product.subcategory);
        result.push({
          subcategory: product.subcategory,
          image: product.image,
        });
      }
    }

    return result;
  };

  return (
    <>
      <Navbar />
      <main className="px-4 py-4 max-w-6xl mx-auto bg-white">
        {/* HERO/BANNER SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          <div className="col-span-1 lg:col-span-2">
            {products
              .filter((product) => product.name === "Xbox Series S Console")
              .map((product) => (
                <ProductBanner
                  key={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  shortDescription={product.shortDescription}
                  ctaText="SHOP NOW"
                />
              ))}
          </div>
          <div className="flex flex-col gap-6">
            {products
              .filter((product) => product.name === "Google Pixel 6 Pro")
              .map((product) => (
                <ProductBanner
                  key={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  discount={product.discount}
                  backgroundColor="#191C1F"
                  textColor="#fff"
                  badgeText={`${product.discount}% OFF`}
                  badgeColor="#EBC80C"
                  ctaText="SHOP NOW →"
                />
              ))}
            {products
              .filter((product) => product.name === "Xiaomi FlipBuds Pro")
              .map((product) => (
                <ProductBanner
                  key={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  backgroundColor="#F5F7FA"
                  ctaText="SHOP NOW →"
                />
              ))}
          </div>
        </section>
        <div className="text-black">End of first banner</div>
        {/* FEATURE HIGHLIGHTS SECTION */}
        <FeatureHighlights />
        {/* Best Deals Section */}
        <BestDealsSection />
        {/* Shop with Categorys Section */}
        <CategorySection />
        {/* Featured Products Section */}
        <section className="my-24">
          <div className="flex flex-col md:flex-row gap-6">
            <PromoBanner
              title="32% Discount"
              subtitle="COMPUTER & ACCESSORIES"
              description="For all electronics products"
              image="/images/promo-banner-yellow.png"
              badgeText="Offers ends in: ENDS OF CHRISTMAS"
            />
            <FeaturedProductsSection />
          </div>
        </section>
        {/* New Apple HomePod Mini Section */}
        <AppleHomePodMiniSection />
        {/* Computer Accessories Section */}
        <ComputerAccessoriesSection />
        {/* New Macbook Pro Section */}
        <MacbookProSection />
        {/* Deal Categories Section */}
        <DealCategoriesSection />
        {/* Latest News Section */}
        <LatestNewsSection />
      </main>
      <Footer />
    </>
  );
} 