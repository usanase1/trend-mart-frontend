import Image from "next/image";

const MacbookProSection = () => (
  <section className="bg-[#FFE7D6] py-10 px-6 md:px-16 rounded-lg mt-12">
    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Text Content */}
      <div className="flex-1 max-w-xl">
        <div className="bg-[#2DA5F3] text-white text-xs font-bold px-3 py-1 rounded inline-block mb-3">
          SAVE UP TO $200.00
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          $1999
        </h2>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Macbook Pro
        </h3>
        <p className="text-gray-600 text-sm mb-6">
          Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded text-sm">
          Shop Now
        </button>
      </div>
      <div className="flex-1 max-w-md">
        <Image
          src="/images/macbook-pro.png"
          alt="Macbook Pro"
          className="w-full h-auto object-contain"
          height={424}
          width={536}
        />
      </div>
    </div>
  </section>
);

export default MacbookProSection; 