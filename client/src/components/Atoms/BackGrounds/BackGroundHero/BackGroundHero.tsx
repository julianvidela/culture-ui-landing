import React from 'react';
import BlurCircle from '@/components/BlurCircle/BlurCircle';
import { heroCircles } from '@/components/BlurCircle/blurCircleConfig'; 

const BackgroundHero: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <div className="absolute w-full h-full flex justify-center items-center -z-10">
        {heroCircles.map((circle, index) => (
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

export default BackgroundHero;