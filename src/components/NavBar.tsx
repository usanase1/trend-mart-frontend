"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faShoppingCart,
  faHeart,
  faUser,
  faSearch,
  faMapMarkerAlt,
  faSync,
  faHeadset,
  faQuestionCircle,
  faChevronDown,
  faTimes,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
import { useState, useEffect } from "react"

type Category = {
  id: number
  name: string
}

export default function Navbar() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    // Fetch categories from Fake Store API
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        const formattedCategories = data.map((cat: string, index: number) => ({
          id: index + 1,
          name: cat.charAt(0).toUpperCase() + cat.slice(1).replace(/'/g, " & "),
        }))
        setCategories(formattedCategories)
      })
      .catch(() => {
        // Fallback categories if API fails
        setCategories([
          { id: 1, name: "Electronics" },
          { id: 2, name: "Jewelery" },
          { id: 3, name: "Men's Clothing" },
          { id: 4, name: "Women's Clothing" },
        ])
      })
  }, [])

  return (
    <>
      {/* Top Black Friday Banner */}
      <div className="bg-black text-white text-sm flex justify-between items-center px-6 py-2">
        <div className="flex items-center">
          <span className="bg-yellow-400 text-black px-2 py-0.5 font-semibold rounded mr-1">Black</span>
          <span className="mr-2">Friday</span>
          <span>
            Up to <span className="text-yellow-400 font-bold">59%</span> OFF
          </span>
        </div>
        <Link
          href="#"
          className="bg-yellow-400 text-black px-4 py-1 rounded font-medium text-sm hover:bg-yellow-300 transition flex items-center gap-1"
        >
          SHOP NOW →
        </Link>
        <button className="text-white hover:text-gray-300 ml-4">
          <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
        </button>
      </div>

      {/* Welcome / Socials */}
      <div className="bg-[#1B6392] text-white text-xs px-6 py-2">
        <div className="flex justify-between items-center">
          <span>Welcome to Clicon online eCommerce store.</span>
          <div className="flex items-center gap-4">
            <span>Follow us:</span>
            <Link href="#" className="hover:text-yellow-400 transition">
              <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition">
              <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition">
              <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition">
              <FontAwesomeIcon icon={faYoutube} className="w-4 h-4" />
            </Link>
            <select className="bg-transparent text-white text-xs border-none outline-none cursor-pointer ml-2">
              <option className="bg-[#1B6392]">Eng</option>
              <option className="bg-[#1B6392]">Fr</option>
            </select>
            <select className="bg-transparent text-white text-xs border-none outline-none cursor-pointer">
              <option className="bg-[#1B6392]">USD</option>
              <option className="bg-[#1B6392]">EUR</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Logo + Search + Icons */}
      <div className="bg-[#1B6392] text-white py-4 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#1B6392] font-bold text-sm">C</span>
            </div>
            <span className="text-2xl font-bold tracking-wide">CLICON</span>
          </Link>

          <div className="flex w-full md:max-w-2xl rounded overflow-hidden bg-white">
            <input
              type="text"
              placeholder="Search for anything..."
              className="px-4 py-3 w-full text-black outline-none"
            />
            <button className="bg-orange-500 px-6 hover:bg-orange-600 transition">
              <FontAwesomeIcon icon={faSearch} className="text-white w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/cart" className="relative">
              <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6 hover:text-yellow-400 transition" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Link>
            <Link href="/wishlist">
              <FontAwesomeIcon icon={faHeart} className="w-6 h-6 hover:text-yellow-400 transition" />
            </Link>
            <Link href="/account">
              <FontAwesomeIcon icon={faUser} className="w-6 h-6 hover:text-yellow-400 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Category + Links */}
      <div className="bg-white text-black px-6 py-3 border-b">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="relative">
              <select className="border border-gray-300 px-4 py-2 rounded appearance-none bg-white pr-8 cursor-pointer min-w-[140px]">
                <option value="">All categories</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-500"
              />
            </div>

            <button className="flex items-center gap-1 hover:text-[#1B6392] transition whitespace-nowrap">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" /> Track Order
            </button>
            <button className="flex items-center gap-1 hover:text-[#1B6392] transition whitespace-nowrap">
              <FontAwesomeIcon icon={faSync} className="w-4 h-4" /> Compare
            </button>
            <button className="flex items-center gap-1 hover:text-[#1B6392] transition whitespace-nowrap">
              <FontAwesomeIcon icon={faHeadset} className="w-4 h-4" /> Customer Support
            </button>
            <button className="flex items-center gap-1 hover:text-[#1B6392] transition whitespace-nowrap">
              <FontAwesomeIcon icon={faQuestionCircle} className="w-4 h-4" /> Need Help
            </button>
          </div>

          <div className="text-sm font-medium text-gray-600 flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
            +1-202-555-0104
          </div>
        </div>
      </div>
    </>
  )
}
