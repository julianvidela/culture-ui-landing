import React from 'react';
import BlurCircle from '@/components/BlurCircle/BlurCircle';

const BackgroundGallery: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <div className="absolute w-full h-full flex justify-center items-center -z-10">
        <BlurCircle className="top-[25%] left-[36%]" gradientClass="bg-gradient-gold" />
        <BlurCircle className="bottom-[50%] right-[10%]" gradientClass="bg-gradient-cyan-soft" />
        <BlurCircle className="bottom-[15%] right-[10%]" gradientClass="bg-gradient-blue-dark" />
        <BlurCircle className="bottom-[15%] left-[10%]" gradientClass="bg-gradient-blue-deep" />
        <BlurCircle className="top-[9%] right-[60%]" gradientClass="bg-gradient-cyan-soft-2" />
        <BlurCircle className="top-[50%] left-[36%]" gradientClass="bg-gradient-gold-2" />
      </div>
    </div>
  );
};

export default BackgroundGallery;
