import React from 'react';

const SupportPopularTopics: React.FC = () => (
  <div className="max-w-6xl mx-auto w-full py-12 px-4">
    <h2 className="text-2xl font-bold text-center mb-10">Popular Topics</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-base text-black">
      <ul className="list-disc list-inside space-y-2">
        <li className="transition-colors duration-150 hover:text-[#FA8232] hover:font-semibold cursor-pointer">How do I return my item?</li>
        <li className="transition-colors duration-150 hover:text-[#FA8232] hover:font-semibold cursor-pointer">What is Clicons Returns Policy?</li>
        <li className="transition-colors duration-150 hover:text-[#FA8232] hover:font-semibold cursor-pointer">How long is the refund process?</li>
      </ul>
      <ul className="list-disc list-inside space-y-2">
        <li className="transition-colors duration-150 hover:text-[#FA8232] hover:font-semibold cursor-pointer">What are the &apos;Delivery Timelines&apos;?</li>
        <li className="transition-colors duration-150 hover:text-[#FA8232] hover:font-semibold cursor-pointer">What is &apos;Discover Your Daraz Campaign 2022&apos;?</li>
        <li className="transition-colors duration-150 hover:text-[#FA8232] hover:font-semibold cursor-pointer">What is the Voucher & Gift Offer in this Campaign?</li>
      </ul>
      <ul className="list-disc list-inside space-y-2">
        <li className="transition-colors duration-150 hover:text-[#FA8232] hover:font-semibold cursor-pointer">How to cancel Clicon Order.</li>
        <li className="transition-colors duration-150 hover:text-[#FA8232] hover:font-semibold cursor-pointer">Ask the Digital and Device Community</li>
        <li className="transition-colors duration-150 hover:text-[#FA8232] hover:font-semibold cursor-pointer">How to change my shop name?</li>
      </ul>
    </div>
  </div>
);

export default SupportPopularTopics; 