import React from 'react';
// import Image from 'next/image';

const SupportContact: React.FC = () => (
  <div className="bg-[#F5F7FA] py-10 mt-8">
    <div className="max-w-6xl mx-auto w-full text-center">
      {/* Removed support agent image from here */}
      <button className="bg-[#2196F3] text-white px-8 py-2 rounded mb-6 font-semibold text-base mx-auto block">CONTACT US</button>
      <h2 className="text-3xl font-bold mb-10 text-center">Don’t find your answer.<br />Contact with us</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {/* Call Us Card */}
        <div className="flex flex-col items-start w-full max-w-[536px] rounded-[4px] gap-6 opacity-100 bg-white p-8 shadow-[0px_24px_32px_0px_#191C1F14] mx-auto">
          <div className="bg-[#E3F0FC] rounded-lg p-4 mb-6 flex items-center justify-center">
            <img src="/icons/PhoneCall.png" alt="Call us" className="w-8 h-8" />
          </div>
          <div className="w-[352px] max-w-full h-[192px] flex flex-col gap-6 opacity-100">
            <div className="text-lg font-semibold mb-1 text-black">Call us now</div>
            <div className="text-gray-500 text-sm mb-2">we are available online from 9:00 AM to 5:00 PM<br/>(GMT95:45) Talk with use now</div>
            <div className="text-2xl font-bold text-black mb-6">+1-202-555-0126</div>
          </div>
          <button className="bg-[#2196F3] text-white w-full py-3 rounded font-semibold flex items-center justify-center gap-2 text-base mt-auto">CALL NOW <span className="text-xl">→</span></button>
        </div>
        {/* Chat With Us Card */}
        <div className="flex flex-col items-start w-full max-w-[536px] rounded-[4px] gap-6 opacity-100 bg-white p-8 shadow-[0px_24px_32px_0px_#191C1F14] mx-auto">
          <div className="bg-[#E3FCEC] rounded-lg p-4 mb-6 flex items-center justify-center">
            <img src="/icons/ChatCircleDots.png" alt="Chat with us" className="w-8 h-8" />
          </div>
          <div className="w-[352px] max-w-full h-[192px] flex flex-col gap-6 opacity-100">
            <div className="text-lg font-semibold mb-1 text-black">Chat with us</div>
            <div className="text-gray-500 text-sm mb-2">we are available online from 9:00 AM to 5:00 PM<br/>(GMT95:45) Talk with use now</div>
            <div className="text-2xl font-bold text-black mb-6">Support@clicon.com</div>
          </div>
          <button className="bg-[#22C55E] text-white w-full py-3 rounded font-semibold flex items-center justify-center gap-2 text-base mt-auto">CONTACT US <span className="text-xl">→</span></button>
        </div>
      </div>
    </div>
  </div>
);

export default SupportContact; 