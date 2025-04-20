import React from 'react';
import BlurCircle from '@/components/BlurCircle/BlurCircle';

const BackgroundHero: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <div className="absolute w-full h-full flex justify-center items-center -z-10">
        <BlurCircle className="top-[20%] left-[35%]" gradientClass="bg-gradient-gold-solid" />
        <BlurCircle className="top-[10%] left-[1%]" gradientClass="bg-gradient-cyan-soft-hero" />
        <BlurCircle className="bottom-[2%] right-[6%]" gradientClass="bg-gradient-blue-solid" />
        <BlurCircle className="bottom-[2%] left-[6%]" gradientClass="bg-gradient-blue-solid" />
        <BlurCircle className="top-[9%] right-[1%]" gradientClass="bg-gradient-cyan-alt" />
      </div>
    </div>
  );
};

export default BackgroundHero;
