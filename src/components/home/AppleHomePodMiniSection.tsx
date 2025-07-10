import Image from "next/image";

const AppleHomePodMiniSection = () => (
  <section className="my-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex items-center justify-between bg-white p-6 rounded-md shadow relative">
        <div className="max-w-[50%]">
          <span className="text-xs bg-blue-100 text-blue-600 font-semibold px-2 py-1 rounded uppercase">
            Introducing
          </span>
          <h3 className="text-2xl font-bold mt-2 mb-2">
            New Apple Homepod Mini
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Jam-packed with innovation, HomePod mini delivers unexpectedly.
          </p>
          <button className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded">
            SHOP NOW
            <span className="ml-2">→</span>
          </button>
        </div>
        <Image
          src="/images/homepod.png"
          alt="Apple Homepod Mini"
          className="w-40 h-40 object-contain"
          height={240}
          width={240}
        />
      </div>
      <div className="flex items-center justify-between bg-gray-900 text-white p-6 rounded-md shadow relative">
        <div className="max-w-[50%]">
          <span className="text-xs bg-yellow-300 text-black font-semibold px-2 py-1 rounded uppercase">
            Introducing New
          </span>
          <h3 className="text-2xl font-bold mt-2 mb-2">
            Xiaomi Mi 11 Ultra 12GB+256GB
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            *Data provided by internal laboratories. Industry measurement.
          </p>
          <button className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded">
            SHOP NOW
            <span className="ml-2">→</span>
          </button>
        </div>
        <Image
          src="/images/xiaomi-mi11.png"
          alt="Xiaomi Mi 11 Ultra"
          className="w-40 h-40 object-contain"
          height={349}
          width={312}
        />
        <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
          $590
        </div>
      </div>
    </div>
  </section>
);

export default AppleHomePodMiniSection; 