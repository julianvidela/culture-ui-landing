"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface ImagesGalleryProps {
  images: string[];
  itemWidth?: string;       
  itemHeight?: string;      
  gap?: string;           
  rounded?: string;         
  zoomScale?: number;
  customClass?: string;
}

export const ImagesGallery: React.FC<ImagesGalleryProps> = ({
  images,
  itemWidth = "w-[200px]",
  itemHeight = "h-[150px]",
  gap = "gap-4",
  rounded = "rounded-lg",
  zoomScale = 2,
  customClass,
}) => {
  return (
    <div className={clsx("flex flex-wrap", gap, customClass)}>
      {images.map((src, index) => (
        <div
          key={index}
          className={clsx(
            "overflow-hidden group",
            itemWidth,
            itemHeight,
            rounded
          )}
        >
          <Image
            src={src}
            alt={`img-${index}`}
            width={800}
            height={600}
            className={clsx(
              "w-full h-full object-cover transition-transform duration-500",
              `group-hover:scale-[${zoomScale}]`
            )}
          />
        </div>
      ))}
    </div>
  );
};
