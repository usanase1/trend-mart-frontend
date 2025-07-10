/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import Image from 'next/image';
import WhoWeAreSection from '@/components/about/WhoWeAreSection';
import CoreTeamSection from '@/components/about/CoreTeamSection';
import BannerSection from '@/components/about/BannerSection';
import aboutTeamData from '@/components/about/aboutTeamData';
import aboutProductsData from '@/components/about/aboutProductsData';
import DealCategoriesSection from '@/components/home/DealCategoriesSection';

export default function About() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="w-full max-w-7xl mx-auto rounded-[4px] opacity-100 overflow-hidden flex-1">
        <div className="px-4 py-8 md:py-16 space-y-16 md:space-y-24">
          {/* Who we are */}
          <WhoWeAreSection />
          {/* Core team */}
          <CoreTeamSection teamMembers={aboutTeamData} />
        </div>
        {/* Banner image made full screen width here */}
        <BannerSection />
        <div className="px-4 py-8 md:py-16 space-y-16 md:space-y-24">
          {/* Products section */}
          <DealCategoriesSection />
        </div>
      </div>
    </div>
  );
}
