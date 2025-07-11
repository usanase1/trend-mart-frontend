"use client";
import React from 'react';
import SupportHeader from '@/components/support/SupportHeader';
import SupportCategories from '@/components/support/SupportCategories';
import SupportPopularTopics from '@/components/support/SupportPopularTopics';
import SupportContact from '@/components/support/SupportContact';
import Navbar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function CustomerSupport() {
  return (
    <>
    <Navbar/>
    <Breadcrumb/>
    <div className="bg-white min-h-screen flex flex-col">
      <SupportHeader />
      <SupportCategories />
      <SupportPopularTopics />
      <SupportContact />
    </div>
    <Footer/>
    </>
  );
}
