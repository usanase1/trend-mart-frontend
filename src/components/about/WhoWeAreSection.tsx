import Image from 'next/image';

export default function WhoWeAreSection() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <span
          className="bg-[#2DA5F3] text-white font-semibold text-[14px] leading-[20px] w-[124px] h-[36px] rounded-[2px] pt-2 pb-2 pr-4 pl-4 inline-flex items-center justify-center opacity-100 uppercase whitespace-nowrap"
          style={{ fontFamily: 'Public Sans, sans-serif' }}
        >
          Who we are
        </span>
        <h2 className="text-4xl font-bold mt-4 mb-6 text-[#191C1F]">
          Kinbo - largest electronics <br /> retail shop in the world.
        </h2>
        <p className="text-gray-600 mb-4">
          Pellentesque ultricies, dui vel hendrerit iaculis, ipsum velit vestibulum risus, 
          ac tincidunt diam lectus id magna. Praesent maximus lobortis massa et laoreet rhoncus. 
          Nulla tempus felis a dui aliquet, non ultricies nibh elementum.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>✅ Great 24/7 customer services.</li>
          <li>✅ 600+ dedicated employees.</li>
          <li>✅ 50+ branches all over the world.</li>
          <li>✅ Over 1 million electronics products.</li>
        </ul>
      </div>
      <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden relative">
        <Image 
          src="/images/about.png"
          alt="About Us"
          fill
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
} 