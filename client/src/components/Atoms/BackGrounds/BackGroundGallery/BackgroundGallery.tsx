import React from 'react';
import BlurCircle from '@/components/BlurCircle/BlurCircle';
import { galleryCircles } from '@/components/BlurCircle/blurCircleConfig';

const BackgroundGallery: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <div className="absolute w-full h-full flex justify-center items-center -z-10">
        {galleryCircles.map((circle, index) => (
          <BlurCircle
            key={index}
            className={circle.className}
            gradientClass={circle.gradientClass}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundGallery;