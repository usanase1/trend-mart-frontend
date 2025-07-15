"use client"

import type React from "react"
import { useState } from "react"
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setTimeout(() => {
        setIsSubscribed(true)
        setEmail("")
      }, 1000)
    }
  }

  return (
    <>
      {/* Newsletter Section */}
      <div className="bg-[#1B6392] text-white px-6 py-12 text-center">
        <h3 className="text-2xl font-bold mb-3">Subscribe to our newsletter</h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna.
          Quisque vitae porta ipsum.
        </p>

        {!isSubscribed ? (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex items-center gap-0 bg-white rounded overflow-hidden mb-8"
          >
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 text-black outline-none"
              required
            />
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="px-6 py-3 font-medium"
            >
              SUBSCRIBE →
            </Button>
          </form>
        ) : (
          <div className="mb-8">
            <p className="text-green-200 font-semibold">✓ Successfully subscribed!</p>
          </div>
        )}

        <div className="flex justify-center items-center gap-8 text-white opacity-80">
          <span className="text-lg font-medium">Google</span>
          <span className="text-lg font-medium">amazon</span>
          <span className="text-lg font-medium">PHILIPS</span>
          <span className="text-lg font-medium">TOSHIBA</span>
          <span className="text-lg font-medium">SAMSUNG</span>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-[#1B6392] dark:bg-gray-900 text-white dark:text-white py-8 px-4 mt-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold text-white">CLICON</span>
            </div>
            <div className="space-y-1 text-sm">
              <p className="text-gray-300">Customer Supports:</p>
              <p className="text-white font-semibold">(629) 555-0129</p>
              <p className="mt-3">4517 Washington Ave.</p>
              <p>Manchester, Kentucky 39495</p>
              <p className="mt-2">info@kinbo.com</p>
            </div>
          </div>

          {/* Top Category */}
          <div>
            <h5 className="text-white font-semibold mb-4 uppercase">Top Category</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Computer & Laptop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  SmartPhone
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Headphone
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Camera & Photo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  TV & Homes
                </a>
              </li>
              <li className="pt-1">
                <a href="#" className="text-orange-400 hover:text-orange-300 transition">
                  Browse All Product →
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-semibold mb-4 uppercase">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Shop Product
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Shopping Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Compare
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Track Order
                </a>
              </li>
              <li>
                <a href="/customer-support" className="hover:text-white transition">
                  Customer Help
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-white transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h5 className="text-white font-semibold mb-4 uppercase">Download App</h5>
            <div className="space-y-3">
              <Button className="w-full bg-gray-800 hover:bg-gray-700 transition rounded p-3 flex items-center gap-3 text-left">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <i className="fab fa-google-play text-black text-sm"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-white font-semibold">Google Play</div>
                </div>
              </Button>
              <Button className="w-full bg-gray-800 hover:bg-gray-700 transition rounded p-3 flex items-center gap-3 text-left">
                <div className="w-8 h-8 bg-white rounded flex items-center gap-1 justify-center">
                  <i className="fab fa-apple text-black text-sm"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-white font-semibold">App Store</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Popular Tags */}
          <div>
            <h5 className="text-white font-semibold mb-4 uppercase">Popular Tag</h5>
            <div className="flex flex-wrap gap-2">
              {[
                "Game",
                "iPhone",
                "TV",
                "Asus Laptops",
                "Macbook",
                "SSD",
                "Graphics Card",
                "Power Bank",
                "Smart TV",
                "Speaker",
                "Tablet",
                "Microwave",
                "Samsung",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-transparent border border-gray-600 text-xs rounded hover:bg-gray-700 cursor-pointer transition text-gray-300 hover:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-500">Kinbo - eCommerce Template © 2021. Design by Templatecookie</p>
        </div>
      </footer>
    </>
  )
}
