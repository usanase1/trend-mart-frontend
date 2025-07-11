"use client"
import React from "react";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const categories = ["Technology", "Design", "Development", "Marketing"];
  const recentPosts = ["Post 1", "Post 2", "Post 3", "Post 4"];
  const popularTags = ["Game", "Photo", "TV", "Asus Laptops", "Macbook", "SSD", "Graphics Card"];
  const gallery = Array(6).fill(0);

  const blogPosts = [
    { title: "The future of tech", desc: "Short description of the blog post goes here." },
    { title: "Design thinking", desc: "Brief intro to design trends and workflows." },
    { title: "React best practices", desc: "Learn the most effective patterns." },
    { title: "Cybersecurity basics", desc: "How to stay safe online." },
    { title: "AI and creativity", desc: "Where machine meets imagination." },
    { title: "Photography tips", desc: "Get the most from your camera." },
    { title: "Web animations", desc: "Add life to your websites." },
    { title: "Remote work tools", desc: "Boost your productivity from anywhere." },
  ];

  return (
    <div className="bg-white py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Sidebar */}
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              {categories.map((cat, idx) => (
                <li key={idx} className="hover:text-orange-500 cursor-pointer">{cat}</li>
              ))}
            </ul>
          </div>

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
                <span
                  key={idx}
                  className="text-sm border rounded-full px-3 py-1 hover:bg-orange-500 hover:text-white cursor-pointer transition"
                >
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

        {/* Blog posts */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <div className="w-full h-48 bg-gray-200"></div>
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-lg">{post.title}</h4>
                <p className="text-sm text-gray-600">{post.desc}</p>
                <button className="flex items-center gap-2 text-orange-500 font-semibold mt-2 hover:underline">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Numeric pagination */}
      <div className="flex justify-center mt-12 space-x-2 text-sm font-semibold">
        <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-orange-500 hover:text-white">1</button>
        <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-orange-500 hover:text-white">2</button>
        <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-orange-500 hover:text-white">3</button>
        <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-orange-500 hover:text-white">4</button>
      </div>
    </div>
  );
}
