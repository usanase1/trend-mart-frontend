"use client"
import React from "react";
import { MessageCircle, ArrowRight, Facebook, Twitter, Linkedin } from "lucide-react";

export default function BlogDetails() {
  const recentPosts = ["Recent 1", "Recent 2", "Recent 3", "Recent 4"];
  const popularTags = ["Tech", "AI", "Design", "Crypto", "UI", "Marketing"];
  const gallery = Array(6).fill(0);
  const comments = [
    { name: "John Doe", text: "This is really helpful, thank you!" },
    { name: "Jane Smith", text: "Great insights, learned a lot from this post." }
  ];

  return (
    <div className="bg-white py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

      {/* Main content */}
      <div className="md:col-span-3 space-y-8">

        {/* Featured image */}
        <div className="w-full h-64 bg-gray-200 rounded"></div>

        {/* Meta info */}
        <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-600">
          <span>July 4, 2025</span>
          <span className="border-l h-4 border-gray-400"></span>
          <span>Electronics</span>
          <span className="border-l h-4 border-gray-400"></span>
          <div className="flex items-center gap-1">
            <MessageCircle size={14} /> <span>2 Comments</span>
          </div>
        </div>

        {/* Blog title */}
        <h1 className="text-2xl font-bold">How smart electronics like iPads reshape ecosystems</h1>

        {/* Blog text */}
        <p className="text-gray-700">
          Pellentesque ultricies, dui vel hendrerit iaculis, ipsum velit vestibulum risus,
          ac tincidunt diam lectus id magna. Praesent maximus lobortis massa et laoreet rhoncus.
        </p>

        {/* Quote block */}
        <div className="border-l-4 border-orange-500 pl-4 py-2 italic text-gray-800 bg-orange-50">
          Technology is best when it brings people together.
        </div>

        {/* Additional images/text */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="w-full h-40 bg-gray-200 rounded"></div>
          <div className="w-full h-40 bg-gray-200 rounded"></div>
        </div>

        {/* Social share */}
        <div className="flex items-center gap-4 mt-6">
          <Facebook className="text-gray-600 hover:text-orange-500 cursor-pointer" />
          <Twitter className="text-gray-600 hover:text-orange-500 cursor-pointer" />
          <Linkedin className="text-gray-600 hover:text-orange-500 cursor-pointer" />
        </div>

        {/* Comments */}
        <div className="mt-10 space-y-6">
          <h2 className="text-xl font-bold mb-2">3 Comments</h2>
          {comments.map((cmt, idx) => (
            <div key={idx} className="flex space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-semibold">{cmt.name}</p>
                <p className="text-sm text-gray-700">{cmt.text}</p>
                <button className="text-orange-500 text-sm font-semibold hover:underline mt-1 flex items-center gap-1">
                  Reply <ArrowRight size={14}/>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Sidebar */}
      <div className="space-y-12">
        <div>
          <h3 className="text-xl font-bold mb-4">Latest Posts</h3>
          <div className="space-y-4">
            {recentPosts.map((title, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gray-200 rounded-md"></div>
                <p className="text-sm text-gray-700 hover:text-orange-500 cursor-pointer">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag, idx) => (
              <span key={idx} className="text-sm border rounded-full px-3 py-1 hover:bg-orange-500 hover:text-white cursor-pointer transition">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            {gallery.map((_, idx) => (
              <div key={idx} className="w-full h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
