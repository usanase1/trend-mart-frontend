"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CategoryFilter from '@/components/shops/CategoryFilter';
import PriceFilter from '@/components/shops/PriceFilter';
import BrandFilter from '@/components/shops/BrandFilter';
import Navbar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import ProductToolbar from '@/components/shops/ProductToolbar';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { useCart } from "@/context/CartContext";
import PopularTags from '@/components/shops/PopularTag';
import PromoProductCard from '@/components/shops/PromoProductCard';
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from '@/components/ui/Button';
import ProductActionButton from '@/components/ui/ProductActionButton';

type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
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

const sampleProduct = {
  id: "apple-watch-7",
  name: "Apple Watch Series 7",
  price: 299,
  slug: "apple-watch-series-7",
  image: "/images/apple-watch-series-7.png",
};

const PRODUCTS_PER_PAGE = 16;

export default function ProductDisplay() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const [currentPage, setCurrentPage] = useState(1);

  const categories = Array.from(new Set(products.map((p) => p.category)));
  const brands = Array.from(new Set(products.map((p) => p.brand)));

  useEffect(() => {
    fetch("/product-mock.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFiltered(data.products);
      });
  }, []);

  useEffect(() => {
    const result = products.filter(
      (p) =>
        (selectedCategories.length === 0 ||
          selectedCategories.includes(p.category)) &&
        (selectedBrands.length === 0 || selectedBrands.includes(p.brand)) &&
        p.price >= priceRange[0] &&
        p.price <= priceRange[1] &&
        p.name.toLowerCase().includes(searchText.toLowerCase())
    );

    switch (sortOption) {
      case "mostPopular":
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      case "priceLowHigh":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceHighLow":
        result.sort((a, b) => b.price - a.price);
        break;
      case "ratingHighLow":
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    setFiltered(result);
    setCurrentPage(1);
  }, [
    products,
    selectedCategories,
    selectedBrands,
    priceRange,
    searchText,
    sortOption,
  ]);

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentItems = filtered.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <>
      <Navbar />
      <Breadcrumb />

      <div className="flex gap-6 p-6">
        {/* Sidebar */}
        <aside className="w-full max-w-[250px] border-r pr-4">
          <CategoryFilter
            categories={categories}
            selected={selectedCategories}
            onChange={setSelectedCategories}
          />
          <PriceFilter selectedRange={priceRange} onChange={setPriceRange} />
          <BrandFilter
            brands={brands}
            selected={selectedBrands}
            onChange={setSelectedBrands}
          />
          <PopularTags />
          <PromoProductCard
            product={sampleProduct}
            addToCart={(product) => console.log("Added to cart:", product)}
          />
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <ProductToolbar
            searchText={searchText}
            onSearchChange={setSearchText}
            sortOption={sortOption}
            onSortChange={setSortOption}
            resultsCount={filtered.length}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {currentItems.map((p) => (
              <div key={p.id} className="p-3 hover:shadow-md relative group">
                <div className="relative h-36 mb-2 overflow-hidden rounded">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain"
                  />

                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
                    <ProductActionButton
                      icon={<Heart size={16} />}
                      ariaLabel="Add to Wishlist"
                      colorClass="bg-white text-gray-600 hover:text-red-500"
                    />
                    <ProductActionButton
                      icon={<ShoppingCart size={16} />}
                      ariaLabel="Add to Cart"
                      colorClass="bg-orange-500 text-white hover:bg-orange-600"
                      onClick={() =>
                        addToCart({
                          id: p.id,
                          name: p.name,
                          price: p.price,
                          quantity: 1,
                          image: p.image,
                        })
                      }
                    />
                    <ProductActionButton
                      icon={<Eye size={16} />}
                      ariaLabel="View Details"
                      colorClass="bg-white text-gray-600 hover:text-blue-600"
                      onClick={() => router.push(`/shop-page/products/${p.id}`)}
                    />
                  </div>
                </div>

                <div className="text-xs text-yellow-500">
                  ★ {p.rating} ({p.reviews})
                </div>
                <h3 className="mt-2 text-sm font-semibold opacity-50">{p.name}</h3>
                <div className="text-xs text-gray-500 line-through">${p.originalPrice}</div>
                <div className="text-blue-600 font-bold">${p.price}</div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  variant={currentPage === i + 1 ? "secondary" : "outline"}
                  size="sm"
                  className={`px-3 py-1 border rounded ${
                    currentPage === i + 1
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
