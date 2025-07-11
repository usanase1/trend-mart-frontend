import React from 'react';
import Image from 'next/image';
import { Search } from "lucide-react";

const SupportHeader: React.FC = () => (
  <div className="max-w-6xl mx-auto w-full bg-white opacity-100 flex flex-col md:flex-row items-center justify-between h-auto md:h-[332px] px-4">
    <div className="flex-1 w-full md:w-1/2 flex flex-col justify-center">
      <span className="inline-block bg-yellow-400 text-xs font-semibold rounded-[2px] opacity-100 px-4 py-2 w-[129px] h-[36px] mb-2 text-center" style={{gap: '10px'}}>HELP CENTER</span>
      <h1 className="text-2xl md:text-3xl font-bold mb-4">How we can help you!</h1>
      <div className="flex gap-2 mt-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Enter your question or keyword"
            className="pl-10 pr-4 py-2 border rounded w-full"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        <button className="bg-orange-500 text-white px-6 py-2 rounded ml-2">SEARCH</button>
      </div>
    </div>
    <div className="flex justify-center items-center w-full md:w-auto mt-8 md:mt-0 md:ml-8">
      <Image
        src="/images/support-agent.jpg"
        alt="Customer Support Agent"
        width={256}
        height={256}
        className="w-64 h-64 object-contain"
      />
    </div>
  </div>
);

export default SupportHeader; 