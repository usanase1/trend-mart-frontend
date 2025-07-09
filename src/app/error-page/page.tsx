'use client';
import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import Image from "next/image";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
      <Image
        src="/images/Oops! 404 Error with a broken robot-rafiki.png"
        alt="404 Error"
        className="w-80 max-w-xs md:max-w-md mb-8"
        style={{ maxWidth: 320 }}
        onError={e => (e.currentTarget.style.display = 'none')}
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">404, Page not found</h1>
      <p className="text-gray-600 text-center mb-8 max-w-xl text-lg">
        Something went wrong. It looks like your request could not be found.<br />
        It&apos;s likely the link is broken or the page is removed.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded flex items-center gap-2 text-base justify-center"
          onClick={() => window.history.back()}
        >
          <span className="text-xl">&#8592;</span> GO BACK
        </button>
        <Link href="/">
          <span className="border-2 border-orange-400 text-orange-600 font-semibold px-8 py-3 rounded flex items-center gap-2 text-base justify-center hover:bg-orange-50 transition cursor-pointer">
            <Home className="w-5 h-5" /> GO TO HOME
          </span>
        </Link>
      </div>
    </div>
  );
}
