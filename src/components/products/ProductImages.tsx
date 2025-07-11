"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  images: string[];
}

export default function ProductImages({ images }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4 items-start">
      <div className="border rounded-xl overflow-hidden w-[420px] h-[300px] relative">
        <Image
          src={selectedImage}
          alt="Selected Product Image"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      <div className="flex gap-3 overflow-x-auto">
        {images.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            width={70}
            height={70}
            onClick={() => setSelectedImage(img)}
            className={`cursor-pointer border-2 ${
              selectedImage === img ? "border-orange-500" : "border-gray-200"
            } rounded-md`}
          />
        ))}
      </div>
    </div>
  );
}
