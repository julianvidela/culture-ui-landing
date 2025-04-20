import React from "react";
import BlurCircle from "@/components/BlurCircle/BlurCircle"; // ajustá el path

const BackgroundCardP: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <div className="relative w-full h-full flex justify-center items-center">
        <BlurCircle
          gradientClass="bg-gradient-blue-deep-light"
          className="left-[2%] bottom-[-70%]"
        />
        <BlurCircle
          gradientClass="bg-gradient-cyan-soft-hero-2"
          className="left-[80%] bottom-[20%]"
        />
      </div>
    </div>
  );
};

export default BackgroundCardP;
