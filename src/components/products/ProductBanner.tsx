import Image from "next/image";
import React from "react";
import { ProductBannerProps } from '@/types/products';

const ProductBanner: React.FC<ProductBannerProps> = ({
  name,
  image,
  price,
  description,
  shortDescription,
  discount,
  ctaText = "SHOP NOW →",
  ctaOnClick,
  backgroundColor = "#F5F7FA",
  textColor = "#191C1F",
  badgeText,
  badgeColor = "#EBC80C",
  children,
}) => {
  return (
    <div
      className="p-6 rounded-lg flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
      style={{ background: backgroundColor, color: textColor }}
    >
      <div className="max-w-lg">
        {badgeText && (
          <span
            className="absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded"
            style={{ background: badgeColor, color: textColor }}
          >
            {badgeText}
          </span>
        )}
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        {shortDescription && <p className="text-gray-600 text-sm mb-4">{shortDescription}</p>}
        {description && <p className="text-gray-600 text-sm mb-4">{description}</p>}
        {discount && (
          <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded mr-2">
            {discount}% OFF
          </span>
        )}
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded text-sm"
          onClick={ctaOnClick}
        >
          {ctaText}
        </button>
        {children}
      </div>
      <div className="w-full md:w-auto max-w-xs mt-6 md:mt-0">
        <Image src={image} alt={name} width={200} height={200} className="object-contain w-full h-auto" />
      </div>
      <div className="absolute top-6 right-6 md:static md:mt-0">
        <div className="bg-blue-400 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg md:ml-4">
          ${price}
        </div>
      </div>
    </div>
  );
};

export default ProductBanner; 