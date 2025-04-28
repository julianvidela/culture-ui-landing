"use client";

import React from "react";
import BlurCircle from "@/components/BlurCircle/BlurCircle";
import { galleryCircles } from "@/components/BlurCircle/blurCircleConfig";

const BackgroundGallery: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      <div className="relative w-full h-full flex justify-center items-center">
        {galleryCircles.map((circle, index) => (
          <BlurCircle
            key={index}
            className={circle.className}
            gradientClass={circle.gradientClass}
            size={circle.size}
            blur={circle.blur}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundGallery;
