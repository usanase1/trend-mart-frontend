/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import Image from 'next/image';
import WhoWeAreSection from '@/components/about/WhoWeAreSection';
import CoreTeamSection from '@/components/about/CoreTeamSection';
import BannerSection from '@/components/about/BannerSection';
import ProductsSection from '@/components/about/ProductsSection';
import NewsletterSection from '@/components/about/NewsletterSection';
import aboutTeamData from '@/components/about/aboutTeamData';
import aboutProductsData from '@/components/about/aboutProductsData';

export default function About() {
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
          <WhoWeAreSection />
          {/* Core team */}
          <CoreTeamSection teamMembers={aboutTeamData} />
        </div>
        {/* Banner image made full screen width here */}
        <BannerSection />
        <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
          {/* Products section */}
          <ProductsSection products={aboutProductsData} />
          {/* Newsletter */}
          <NewsletterSection />
        </div>
      </div>
    </div>
  );
}
