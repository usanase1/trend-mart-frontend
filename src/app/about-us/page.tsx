"use client"
import WhoWeAreSection from '@/components/about/WhoWeAreSection';
import CoreTeamSection from '@/components/about/CoreTeamSection';
import BannerSection from '@/components/about/BannerSection';
import aboutTeamData from '@/components/about/aboutTeamData';
import DealCategoriesSection from '@/components/home/DealCategoriesSection';
import Navbar from '@/components/layout/NavBar';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Footer from '@/components/layout/Footer';

export default function About() {
  return (
    <>
    <Navbar/>
    <Breadcrumb/>
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
    <Footer/>
    </>
  );
}
