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
    <div className="bg-white">
      <div
        className="
          w-[1920px]
          h-[3316px]
          bg-white
          rounded-[4px]
          opacity-100
          mx-auto
          overflow-hidden
        "
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
                <li>✅ Great 24/7 customer services.</li>
                <li>✅ 600+ dedicated employees.</li>
                <li>✅ 50+ branches all over the world.</li>
                <li>✅ Over 1 million electronics products.</li>
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
          {/* Products section */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {products.map((product, idx) => (
                <div key={idx} className="border p-4 rounded-lg text-center">
                  <div className="w-full h-32 bg-gray-100 mb-4"></div>
                  <h3 className="font-semibold text-sm">{product.title}</h3>
                  <p className="text-blue-600 font-bold">{product.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-blue-600 text-white p-8 rounded-lg text-center space-y-4 w-[1920px]">
            <h2 className="text-2xl font-bold">Subscribe to our newsletter</h2>
            <p>Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus.</p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow p-3 rounded-l-md text-gray-800"
              />
              <button className="bg-orange-500 px-6 rounded-r-md">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
