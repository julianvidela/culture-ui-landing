"use client";

import { Footer } from "@/components/Footer/Footer";
import { HeroShowCase } from "./components/HeroShowCase";
import { ComponentsGallery } from "./components/ComponentsGallery";




const ComponentShowCase = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-8">
      <HeroShowCase />

      <ComponentsGallery />

      <Footer /> 
      
    </div>
  );
};

export default ComponentShowCase;
