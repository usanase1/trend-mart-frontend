"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
// import ProductBanner from "@/components/products/ProductBanner";
import FeatureHighlights from "@/components/ui/FeatureHighlights";
import PromoBanner from "@/components/ui/PromoBanner";
import BestDealsSection from "@/components/home/BestDealsSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import ComputerAccessoriesSection from "@/components/home/ComputerAccessoriesSection";
import DealCategoriesSection from "@/components/home/DealCategoriesSection";
import LatestNewsSection from "@/components/home/LatestNewsSection";
import AppleHomePodMiniSection from "./AppleHomePodMiniSection";
import MacbookProSection from "./MacbookProSection";
import { Product } from "./types";
import Image from "next/image";
import ShopNowButton from "../ui/ShopNowButton";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentConsoleIndex, setCurrentConsoleIndex] = useState(0);

  useEffect(() => {
    fetch("/product-mock.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []));
  }, []);

  const gamingConsoles = products.filter(
    (product) => product.subcategory === "Gaming Consoles"
  );
  const currentProduct = gamingConsoles[currentConsoleIndex];

  return (
    <>
      <Navbar />
      <main className="px-4 py-4 max-w-6xl mx-auto bg-white">
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {/* LEFT: Gaming Console Slider */}
          <div className="col-span-1 lg:col-span-2 border-2 border-dotted border-blue-200 rounded-lg p-6 bg-white relative">
            {currentProduct && (
              <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Text */}
                <div className="max-w-md">
                  <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-2">
                    — The Best Place To Play
                  </p>
                  <h2 className="text-3xl font-bold text-black mb-2">
                    {currentProduct.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-6">
                    {currentProduct.shortDescription}
                  </p>
                  <ShopNowButton/>
                </div>

                {/* Image + Price */}
                <div className="relative mt-6 md:mt-0">
                  <Image
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    width={220}
                    height={220}
                    className="object-contain"
                  />
                  <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-400 text-white text-center font-bold rounded-full flex items-center justify-center text-sm shadow">
                    ${currentProduct.price}
                  </div>
                </div>
              </div>
            )}

            {/* Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {gamingConsoles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentConsoleIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentConsoleIndex
                      ? "bg-gray-700"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Static Banners */}
          <div className="flex flex-col gap-6">
            {/* Google Pixel */}
            {products
              .filter((p) => p.name === "Google Pixel 6 Pro")
              .map((product) => (
                <div
                  key={product.id}
                  className="relative bg-[#191C1F] text-white p-4 rounded-lg overflow-hidden"
                >
                  <span className="text-yellow-300 text-xs uppercase font-semibold">
                    Summer Sales
                  </span>
                  <h3 className="text-lg font-bold mt-1 mb-4">
                    {product.name}
                  </h3>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded">
                    SHOP NOW →
                  </button>
                  <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
                    {product.discount}% OFF
                  </span>
                  <div className="absolute bottom-0 right-0 w-28 h-24">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}

            {/* Xiaomi */}
            {products
              .filter((p) => p.name === "Xiaomi FlipBuds Pro")
              .map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-50 p-4 rounded-lg flex justify-between items-center"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                      {product.name}
                    </h4>
                    <p className="text-blue-600 font-bold text-sm">
                      ${product.price} USD
                    </p>
                    <button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-1.5 rounded">
                      SHOP NOW →
                    </button>
                  </div>
                  <div className="w-20 h-20 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
          </div>
        </section>

        <div className="text-black mt-8">End of first banner</div>

        {/* OTHER SECTIONS */}
        <FeatureHighlights />
        <BestDealsSection />
        <CategorySection />

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

        <AppleHomePodMiniSection />
        <ComputerAccessoriesSection />
        <MacbookProSection />
        <DealCategoriesSection />
        <LatestNewsSection />
      </main>
      <Footer />
    </>
  );
}
