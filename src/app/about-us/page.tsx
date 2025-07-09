/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import Image from 'next/image';

export default function About() {
  const teamMembers = [
    { name: 'Kevin Gilbert', role: 'Chief Executive Officer' },
    { name: 'Kevin Gilbert', role: 'Assistant of CEO' },
    { name: 'Kevin Gilbert', role: 'Head of Designer' },
    { name: 'Kevin Gilbert', role: 'Product Designer' },
    { name: 'Kevin Gilbert', role: 'Head of Development' },
    { name: 'Kevin Gilbert', role: 'Design Engineer' },
    { name: 'Kevin Gilbert', role: 'UX Designer' },
    { name: 'Kevin Gilbert', role: 'UI Designer' },
  ];

  const products = [
    { title: 'Bose Sport Earbuds', price: '$1,500' },
    { title: 'Samsung Galaxy S21', price: '$1,500' },
    { title: 'Sony DSCQX High-Zoom', price: '$1,500' },
    { title: 'TOZO T6 Wireless Earbuds', price: '$1,500' },
    { title: '4K UHD LED TV', price: '$1,500' },
    { title: 'Gaming Phone', price: '$1,500' },
    { title: 'Portable Washing Machine', price: '$1,500' },
    { title: '1080p Pan Tilt Camera', price: '$1,500' },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div
        className="flex-1 w-full bg-white rounded-[4px] opacity-100 mx-auto overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">

          {/* Who we are */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="
                  bg-[#2DA5F3]
                  text-white
                  font-semibold
                  text-[14px]
                  leading-[20px]
                  w-[124px]
                  h-[36px]
                  rounded-[2px]
                  pt-2
                  pb-2
                  pr-4
                  pl-4
                  inline-flex
                  items-center
                  justify-center
                  opacity-100
                  uppercase
                  whitespace-nowrap
                "
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
                <li><img src="/images/checks.png" alt="check" className="inline w-5 h-5 mr-2 align-middle" />Great 24/7 customer services.</li>
                <li><img src="/images/checks.png" alt="check" className="inline w-5 h-5 mr-2 align-middle" />600+ dedicated employees.</li>
                <li><img src="/images/checks.png" alt="check" className="inline w-5 h-5 mr-2 align-middle" />50+ branches all over the world.</li>
                <li><img src="/images/checks.png" alt="check" className="inline w-5 h-5 mr-2 align-middle" />Over 1 million electronics products.</li>
              </ul>
            </div>
            <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/images/about.png"
                alt="About Us"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Core team */}
          <div className="w-full bg-white flex flex-col gap-10 py-16 items-center justify-center" style={{ boxShadow: '0px 1px 0px 0px #E4E7E9 inset' }}>
            <h2 className="text-2xl font-semibold text-center mb-10 text-[#191C1F]">Our core team member</h2>
            <div className="w-full max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {teamMembers.map((member, idx) => {
                  const bgColors = [
                    'bg-[#F6F6F6]',
                    'bg-[#FDE9E2]',
                    'bg-[#F6F6F6]',
                    'bg-[#191C1F]',
                    'bg-[#FFF3D6]',
                    'bg-[#E6EAEE]',
                    'bg-[#F6F6F6]',
                    'bg-[#D6F3F0]',
                  ];
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-[#E4E7E9] rounded-[3px] p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center overflow-hidden ${bgColors[idx]}`}>
                        <img
                          src={`/images/kevin${idx + 1}.png`}
                          alt={`Team Member ${idx + 1}`}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-base text-[#191C1F]">{member.name}</h3>
                        <p className="text-sm text-[#5F6C72]">{member.role}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* ✅ Banner image made full screen width here */}
        <div className="w-screen">
          <img
            src="/images/banner.png"
            alt="Products Banner"
            className="w-[1920px] h-auto object-cover block"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
          {/* Products section - Responsive columns with product cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-center">
            {[
              {
                title: "FLASH SALE TODAY",
                products: [
                  { image: "/images/image-1.png", title: "Bose Sport Earbuds -Wireless Earphones -Bluetooth In Ear...", price: "$1,500" },
                  { image: "/images/image-3.png", title: "Simple Mobile 4G LTE Prepaid Smartphone", price: "$1,500" },
                  { image: "/images/image-4.png", title: "4K UHD LED Smart TV with Chromecast Built-in", price: "$1,500" },
                ],
              },
              {
                title: "BEST SELLERS",
                products: [
                  { image: "/images/image-2.png", title: "Samsung Electronics Samsung Galaxy S21 5G", price: "$1,500" },
                  { image: "/images/image-5.png", title: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone", price: "$1,500" },
                  { image: "/images/image-6.png", title: "Sony DSCHX8 High Zoom Point & Shoot Camera", price: "$1,500" },
                ],
              },
              {
                title: "TOP RATED",
                products: [
                  { image: "/images/image-7.png", title: "Portable Wshing Machine, 11lbs capacity Model 18NMF...", price: "$1,500" },
                  { image: "/images/image-8.png", title: "Sony DSCHX8 High Zoom Point & Shoot Camera", price: "$1,500" },
                  { image: "/images/image-9.png", title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor", price: "$1,500" },
                ],
              },
              {
                title: "NEW ARRIVAL",
                products: [
                  { image: "/images/image-10.png", title: "TOZO T6 True Wireless Earbuds Bluetooth Headpho...", price: "$1,500" },
                  { image: "/images/image-11.png", title: "JBL FLIP 4 -Waterproof Portable Bluetooth Speaker...", price: "$1,500" },
                  { image: "/images/image-12.png", title: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...", price: "$1,500" },
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="flex flex-col items-stretch">
                <h3 className="font-bold text-lg mb-4">{section.title}</h3>
                <div className="flex flex-col">
                  {section.products.map((product, pIdx) => (
                    <div key={pIdx} className="min-w-[312px] max-w-[400px] h-[104px] flex items-center gap-3 border border-[#E4E7E9] rounded-[3px] p-3 bg-white mb-3 last:mb-0">
                      <img src={product.image} alt={product.title} className="w-16 h-16 object-contain" />
                      <div>
                        <div className="font-medium text-sm mb-1 line-clamp-2">{product.title}</div>
                        <span className="font-[Public Sans] font-semibold text-[14px] leading-[20px] text-[#2DA5F3]">
                          {product.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
