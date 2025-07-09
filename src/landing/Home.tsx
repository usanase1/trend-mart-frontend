"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";
import ShopNowButton from "./shopButton";
import { useRouter } from "next/navigation";
import {
  Package,
  Trophy,
  ShieldCheck,
  Headphones,
  Heart,
  ShoppingCart,
  Eye,
} from "lucide-react";
import ProductBanner from "@/components/products/ProductBanner";
import FeatureHighlights from "@/components/ui/FeatureHighlights";
import BestDealCard from "@/components/products/BestDealCard";
import ProductGrid from "@/components/products/ProductGrid";
import CategoryCard from "@/components/products/CategoryCard";
import PromoBanner from "@/components/ui/PromoBanner";
import ProductListCard from "@/components/products/ProductListCard";
import SectionHeader from "@/components/ui/SectionHeader";
import BlogCard from "@/components/ui/BlogCard";
import HeroDealCard from '@/components/products/HeroDealCard';
import ProductHoverActions from '@/components/products/ProductHoverActions';

export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  features: string[];
  inStock: boolean;
  brand: string;
  subcategory: string;
  description: string;
  shortDescription: string;
};

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

        <SectionHeader
          title="Best Deals"
          rightContent={
            <div className="text-sm bg-yellow-100 px-3 py-1 rounded text-black font-semibold">
              Deals ends in <span className="text-orange-600">16d : 21h : 57m : 23s</span>
            </div>
          }
        />
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="w-full lg:w-1/3 flex justify-center items-stretch">
            {products
              .filter(
                (product) =>
                  product.slug === "xbox-series-s-512gb-ssd-console" &&
                  product.discount > 0
              )
              .map((product) => (
                <HeroDealCard
                  key={product.id}
                  product={product}
                  onAddToCart={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.image,
                  })}
                  onView={() => router.push(`/shop-page/products/${product.id}`)}
                />
              ))}
          </div>
          <div className="w-full lg:w-2/3">
            <ProductGrid
              products={products.filter(
                (product) =>
                  product.slug !== "xbox-series-s-512gb-ssd-console" &&
                  product.discount > 0
              )}
              gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              renderCard={(product) => (
                <div key={product.id}>
                  <BestDealCard product={product} onAddToCart={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.image,
                  })} />
                </div>
              )}
            />
          </div>
        </div>
        {/* Shop with Categorys Section */}
        <section className="my-24">
          <SectionHeader title="Shop with Categorys" />
          <div className="relative">
            <div
              id="category-scroll"
              className="flex gap-6 overflow-x-auto px-6 scrollbar-hide scroll-smooth"
            >
              {getUniqueCategories().map((cat) => (
                <CategoryCard
                  key={cat.subcategory}
                  image={cat.image}
                  name={cat.subcategory}
                />
              ))}
            </div>
            <button
              onClick={() =>
                document
                  .getElementById("category-scroll")
                  ?.scrollBy({ left: -200, behavior: "smooth" })
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 z-10"
            >
              ←
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("category-scroll")
                  ?.scrollBy({ left: 200, behavior: "smooth" })
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 z-10"
            >
              →
            </button>
          </div>
        </section>
        <section className="my-24">
          <div className="flex flex-col md:flex-row gap-6">
            <PromoBanner
              title="32% Discount"
              subtitle="COMPUTER & ACCESSORIES"
              description="For all electronics products"
              image="/images/promo-banner-yellow.png"
              badgeText="Offers ends in: ENDS OF CHRISTMAS"
            />
            <div className="flex-1">
              <SectionHeader
                title="Featured Products"
                rightContent={
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span className="text-black font-medium border-b-2 border-orange-500 pb-1 cursor-pointer">All Product</span>
                    <span className="hover:text-orange-500 cursor-pointer">Smart Phone</span>
                    <span className="hover:text-orange-500 cursor-pointer">Laptop</span>
                    <span className="hover:text-orange-500 cursor-pointer">Headphone</span>
                    <span className="hover:text-orange-500 cursor-pointer">TV</span>
                    <span className="hover:text-orange-500 font-semibold cursor-pointer">Browse All Product →</span>
                  </div>
                }
              />
              <ProductGrid
                products={products.slice(0, 8)}
                renderCard={(product) => (
                  <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition relative group">
                    {/* Discount/Badge logic can be extracted to a Badge component if desired */}
                    {product.discount >= 20 && (
                      <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
                        {product.discount}% OFF
                      </div>
                    )}
                    {product.discount === 0 && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                        HOT
                      </div>
                    )}
                    {product.discount >= 10 && product.discount < 20 && (
                      <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                        BEST DEALS
                      </div>
                    )}
                    {product.discount > 0 && product.discount < 10 && (
                      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                        SALE
                      </div>
                    )}
                    <div className="w-full h-40 relative mb-3 group">
                      <a href={`/product/${product.slug}`}>
                        <Image src={product.image} alt={product.name} fill className="object-contain" />
                      </a>
                      <ProductHoverActions
                        product={product}
                        onAddToCart={() => addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          quantity: 1,
                          image: product.image,
                        })}
                        onView={() => router.push(`/shop-page/products/${product.id}`)}
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold line-clamp-2 h-10 mb-1">{product.name}</h3>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-blue-800 font-bold">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
                        )}
                      </div>
                      <div className="text-yellow-500 text-xs">
                        {"★".repeat(Math.floor(product.rating))}
                        <span className="text-gray-400 ml-1">({product.reviews})</span>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        </section>

        <section className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center justify-between bg-white p-6 rounded-md shadow relative">
              <div className="max-w-[50%]">
                <span className="text-xs bg-blue-100 text-blue-600 font-semibold px-2 py-1 rounded uppercase">
                  Introducing
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-2">
                  New Apple Homepod Mini
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Jam-packed with innovation, HomePod mini delivers
                  unexpectedly.
                </p>
                <button className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded">
                  SHOP NOW
                  <span className="ml-2">→</span>
                </button>
              </div>
              <Image
                src="/images/homepod.png"
                alt="Apple Homepod Mini"
                className="w-40 h-40 object-contain"
                height={240}
                width={240}
              />
            </div>

            <div className="flex items-center justify-between bg-gray-900 text-white p-6 rounded-md shadow relative">
              <div className="max-w-[50%]">
                <span className="text-xs bg-yellow-300 text-black font-semibold px-2 py-1 rounded uppercase">
                  Introducing New
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-2">
                  Xiaomi Mi 11 Ultra 12GB+256GB
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  *Data provided by internal laboratories. Industry measurement.
                </p>
                <button className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded">
                  SHOP NOW
                  <span className="ml-2">→</span>
                </button>
              </div>
              <Image
                src="/images/xiaomi-mi11.png"
                alt="Xiaomi Mi 11 Ultra"
                className="w-40 h-40 object-contain"
                height={349}
                width={312}
              />

              <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                $590
              </div>
            </div>
          </div>
        </section>

        {/* Computer Accessories Section */}
        <section className="my-16">
          <h2 className="text-2xl font-bold mb-6">Computer Accessories</h2>

          <div className="flex gap-4 text-sm text-gray-600 mb-6 flex-wrap">
            <span className="text-black font-medium border-b-2 border-orange-500 pb-1 cursor-pointer">
              All Product
            </span>
            <span className="hover:text-orange-500 cursor-pointer">
              Keyboard & Mouse
            </span>
            <span className="hover:text-orange-500 cursor-pointer">
              Headphone
            </span>
            <span className="hover:text-orange-500 cursor-pointer">Webcam</span>
            <span className="hover:text-orange-500 cursor-pointer">
              Printer
            </span>
            <span className="hover:text-orange-500 font-semibold cursor-pointer">
              Browse All Product →
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 flex-1">
              {products
                .filter(
                  (product) => product.subcategory === "Computer Accessories"
                )
                .map((product) => (
                  <div
                    key={product.id}
                    className="relative rounded-lg p-4 bg-white shadow group transition hover:shadow-md"
                  >
                    {product.discount >= 25 && (
                      <div className="absolute top-2 left-2 z-10">
                        <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
                          {product.discount}% OFF
                        </span>
                      </div>
                    )}
                    {product.discount === 0 && (
                      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded w-fit">
                        HOT
                      </div>
                    )}
                    {product.discount > 0 && product.discount < 10 && (
                      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded w-fit">
                        SALE
                      </div>
                    )}
                    {product.discount >= 10 && product.discount < 25 && (
                      <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded w-fit">
                        BEST DEALS
                      </div>
                    )}
                    <div className="w-full h-40 relative mb-3 group">
                      <a href={`/product/${product.slug}`}>
                        <Image src={product.image} alt={product.name} fill className="object-contain" />
                      </a>
                      <ProductHoverActions
                        product={product}
                        onAddToCart={() => addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          quantity: 1,
                          image: product.image,
                        })}
                        onView={() => router.push(`/shop-page/products/${product.id}`)}
                      />
                    </div>
                    <h3 className="text-sm font-semibold line-clamp-2 h-10 mb-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-blue-800 font-bold">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="text-yellow-500 text-xs mb-1">
                      {"★".repeat(Math.floor(product.rating))}
                      <span className="text-gray-400 ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {product.features?.[0]}
                    </p>
                  </div>
                ))}
            </div>

            <div className="w-full lg:w-[280px] flex flex-col gap-6">
              <div className="bg-yellow-100 p-6 rounded-lg text-black">
                <Image
                  src="/images/xiaomi-earbuds.png"
                  alt="Xiaomi Earbuds"
                  width={100}
                  height={100}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold mb-2">
                  Xiaomi True Wireless Earbuds
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Escape the noise, It’s time to hear the magic with Xiaomi
                  Earbuds.
                </p>
                <div className="text-xs font-semibold bg-white py-1 px-2 rounded mb-3 inline-block text-black">
                  Only for:{" "}
                  <span className="text-green-800 ml-1 font-bold">
                    $299 USD
                  </span>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded w-full">
                  SHOP NOW →
                </button>
              </div>

              <div className="bg-[#191C1F] text-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">SUMMER SALES</h3>
                <p className="text-sm mb-3">
                  37% DISCOUNT only for{" "}
                  <span className="text-blue-400 font-semibold">
                    SmartPhone
                  </span>{" "}
                  product.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded w-full">
                  SHOP NOW →
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FFE7D6] py-10 px-6 md:px-16 rounded-lg mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Text Content */}
            <div className="flex-1 max-w-xl">
              <div className="bg-[#2DA5F3] text-white text-xs font-bold px-3 py-1 rounded inline-block mb-3">
                SAVE UP TO $200.00
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                $1999
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Macbook Pro
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded text-sm">
                Shop Now
              </button>
            </div>

            <div className="flex-1 max-w-md">
              <Image
                src="/images/macbook-pro.png"
                alt="Macbook Pro"
                className="w-full h-auto object-contain"
                height={424}
                width={536}
              />
            </div>
          </div>
        </section>

        {/* Deal Categories Section */}
        <section className="my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-sm font-bold uppercase mb-4">
                Flash Sale Today
              </h3>
              <div className="space-y-4">
                {products
                  .filter((product) => product.discount >= 20)
                  .slice(0, 3)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 bg-white p-3 rounded shadow-sm hover:shadow-md transition"
                    >
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium line-clamp-2">
                          {product.name}
                        </h4>
                        <p className="text-blue-600 font-bold text-sm">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase mb-4">Best Sellers</h3>
              <div className="space-y-4">
                {products
                  .sort((a, b) => b.reviews - a.reviews)
                  .slice(0, 3)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 bg-white p-3 rounded shadow-sm hover:shadow-md transition"
                    >
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium line-clamp-2">
                          {product.name}
                        </h4>
                        <p className="text-blue-600 font-bold text-sm">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* TOP RATED */}
            <div>
              <h3 className="text-sm font-bold uppercase mb-4">Top Rated</h3>
              <div className="space-y-4">
                {products
                  .filter((product) => product.rating >= 4.5)
                  .slice(0, 3)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 bg-white p-3 rounded shadow-sm hover:shadow-md transition"
                    >
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium line-clamp-2">
                          {product.name}
                        </h4>
                        <p className="text-blue-600 font-bold text-sm">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* NEW ARRIVAL */}
            <div>
              <h3 className="text-sm font-bold uppercase mb-4">New Arrival</h3>
              <div className="space-y-4">
                {products.slice(-3).map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-4 bg-white p-3 rounded shadow-sm hover:shadow-md transition"
                  >
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium line-clamp-2">
                        {product.name}
                      </h4>
                      <p className="text-blue-600 font-bold text-sm">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="my-16 bg-[#f8f9fb] py-12">
          <h2 className="text-2xl font-bold text-center mb-10">Latest News</h2>

          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
              <div className="w-full h-48 relative mb-4 rounded overflow-hidden">
                <Image
                  src="/images/blog-1.jpg"
                  alt="Smartwatch on keyboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                <div className="flex items-center gap-1">
                  <span className="text-orange-500">👤</span> Kristin
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-orange-500">📅</span> 19 Dec, 2013
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-orange-500">👁️</span> 453
                </div>
              </div>
              <h3 className="text-md font-semibold mb-2">
                Cras nisl dolor, accumsan et metus sit amet, vulputate
                condimentum dolor.
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Maecenas scelerisque, arcu quis tempus egestas, ligula diam
                molestie lectus, tincidunt malesuada arcu metus posuere metus.
              </p>
              <button className="text-orange-500 font-semibold text-sm flex items-center gap-1 hover:underline">
                READ MORE →
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
              <div className="w-full h-48 relative mb-4 rounded overflow-hidden">
                <Image
                  src="/images/blog-2.jpg"
                  alt="Motherboard tech"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                <div className="flex items-center gap-1">
                  <span className="text-orange-500">👤</span> Robert
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-orange-500">📅</span> 28 Nov, 2015
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-orange-500">👁️</span> 738
                </div>
              </div>
              <h3 className="text-md font-semibold mb-2">
                Curabitur pulvinar aliquam lectus, non blandit erat mattis
                vitae.
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Mauris scelerisque odio id rutrum volutpat. Pellentesque urna
                odio, vulputate at tortor vitae, hendrerit blandit lorem.
              </p>
              <button className="text-orange-500 font-semibold text-sm flex items-center gap-1 hover:underline">
                READ MORE →
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
              <div className="w-full h-48 relative mb-4 rounded overflow-hidden">
                <Image
                  src="/images/blog-3.jpg"
                  alt="Smartphone on desk"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                <div className="flex items-center gap-1">
                  <span className="text-orange-500">👤</span> Arlene
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-orange-500">📅</span> 9 May, 2014
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-orange-500">👁️</span> 826
                </div>
              </div>
              <h3 className="text-md font-semibold mb-2">
                Curabitur massa orci, consectetur et blandit ac, auctor et
                tellus.
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta,
                odio id suscipit mattis, risus augue condimentum purus.
              </p>
              <button className="text-orange-500 font-semibold text-sm flex items-center gap-1 hover:underline">
                READ MORE →
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


