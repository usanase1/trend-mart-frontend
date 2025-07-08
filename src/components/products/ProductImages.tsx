"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  images: string[];
}

export default function ProductImages({ images }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      <Image src={selectedImage} alt="Product Image" width={600} height={400} className="rounded-xl" />
      <div className="flex gap-2 overflow-x-auto">
        {images.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            width={100}
            height={100}
            className={`cursor-pointer border ${selectedImage === img ? 'border-orange-500' : 'border-gray-200'} rounded-xl`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
