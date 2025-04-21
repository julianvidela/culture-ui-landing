import React from 'react';
import BlurCircle from '@/components/BlurCircle/BlurCircle';
import { cardCircles } from '@/components/BlurCircle/blurCircleConfig'; 

const BackgroundCardP: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <div className="relative w-full h-full flex justify-center items-center">
        {cardCircles.map((circle, index) => (
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

export default BackgroundCardP;