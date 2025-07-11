/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react';
import SupportHeader from '@/components/support/SupportHeader';
import SupportCategories from '@/components/support/SupportCategories';
import SupportPopularTopics from '@/components/support/SupportPopularTopics';
import SupportContact from '@/components/support/SupportContact';

export default function CustomerSupport() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <SupportHeader />
      <SupportCategories />
      <SupportPopularTopics />
      <SupportContact />
    </div>
  );
}
