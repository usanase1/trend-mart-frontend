import Image from "next/image";
import React from "react";
import { PromoBannerProps } from '@/types/shops';
import Button from '@/components/ui/Button';

const PromoBanner: React.FC<PromoBannerProps> = ({ title, subtitle, description, image, ctaText = "SHOP NOW →", ctaOnClick, badgeText }) => (
  <div className="bg-[#F3DE6D] p-6 rounded-lg flex flex-col items-start justify-between w-full md:w-[300px]">
    <div>
      {subtitle && <p className="text-sm font-semibold text-orange-600 mb-2">{subtitle}</p>}
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {description && <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">{description}</p>}
      {badgeText && <div className="text-xs text-black dark:text-gray-900 font-semibold bg-white dark:bg-gray-200 py-1 px-2 rounded mb-4">{badgeText}</div>}
      <Button variant="primary" size="md" onClick={ctaOnClick}>
        {ctaText}
      </Button>
    </div>
    <div className="mt-4 w-full">
      <Image src={image} alt={title} width={300} height={360} className="rounded" />
    </div>
  </div>
);

export default PromoBanner; 