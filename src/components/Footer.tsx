

import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <>
      
      <div className="bg-[#1B6392] text-white px-6 py-10 text-center">
        <h3 className="text-xl font-semibold mb-2">Subscribe to our newsletter</h3>
        <p className="text-sm mb-4">
          Get weekly updates on your favorite products and offers.
        </p>
        <div className="max-w-md mx-auto flex items-center gap-2 bg-white rounded overflow-hidden p-1">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-3 py-2 text-black outline-none"
          />
          <button className="bg-orange-500 text-white px-4 py-2 hover:bg-orange-600">
            Subscribe
          </button>
        </div>
        <div className="flex justify-center gap-6 mt-6 text-gray-300 text-sm">
          <span>Google</span>
          <span>Amazon</span>
          <span>PHILIPS</span>
          <span>TOSHIBA</span>
          <span>SAMSUNG</span>
        </div>
      </div>

      
      <footer className="bg-[#191C1F] text-gray-400 px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

         
          <div>
            <h4 className="text-white font-bold text-lg mb-2">TrendMart</h4>
            <p>Customer Support</p>
            <p className="mt-1">+859 5055 0123</p>
            <p>4517 Washington Ave. Manchester</p>
            <p>Kentucky 39495</p>
            <p className="mt-1">info@trendmart.com</p>
          </div>

          
          <div>
            <h5 className="text-white font-semibold mb-2">Top Category</h5>
            <ul className="space-y-1 text-sm">
              <li>Computers & Laptops</li>
              <li>Smartphones</li>
              <li>Headphones</li>
              <li>Accessories</li>
              <li>Camera & Photo</li>
              <li>TV & Home</li>
              <li className="text-orange-400">Browse All Product →</li>
            </ul>
          </div>

         
          <div>
            <h5 className="text-white font-semibold mb-2">Quick Links</h5>
            <ul className="space-y-1 text-sm">
              <li>Shop Product</li>
              <li>Shopping Cart</li>
              <li>Checkout</li>
              <li>Wishlist</li>
              <li>Compare</li>
              <li>Track Order</li>
              <li>About Us</li>
            </ul>
          </div>

          
          <div>
            <h5 className="text-white font-semibold mb-2">Download App</h5>
            <div className="space-y-2 text-sm">
              <button className="bg-gray-800 text-white px-4 py-2 rounded w-full text-left">
                <span className="block text-xs">GET IT ON</span>
                <span className="block font-semibold">Google Play</span>
              </button>
              <button className="bg-gray-800 text-white px-4 py-2 rounded w-full text-left">
                <span className="block text-xs">Download on the</span>
                <span className="block font-semibold">App Store</span>
              </button>
            </div>
          </div>

          
          <div>
            <h5 className="text-white font-semibold mb-2">Popular Tag</h5>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className=" px-2 py-1 rounded border-gray-800">Game</span>
              <span className=" px-2 py-1 rounded border-gray-800">iPhone</span>
              <span className=" px-2 py-1 rounded border-gray-800">TV</span>
              <span className=" px-2 py-1 rounded border-gray-800">Asus Laptop</span>
              <span className=" px-2 py-1 rounded border-gray-800">Macbook</span>
              <span className=" px-2 py-1 rounded border-gray-800">SSD</span>
              <span className=" px-2 py-1 rounded border-gray-800">Graphics Card</span>
              <span className=" px-2 py-1 rounded border-gray-800">Power Bank</span>
              <span className=" px-2 py-1 rounded border-gray-800">Smart TV</span>
              <span className=" px-2 py-1 rounded border-gray-800">Samsung</span>
            </div>
          </div>
        </div>

        
        <p className="text-center text-xs text-gray-500 mt-10">
          © TrendMart eCommerce Template 2025. Design by Templatecookie
        </p>
      </footer>
    </>
  );
}
