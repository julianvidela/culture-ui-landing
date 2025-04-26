"use client";

import { useComponents } from "@/hooks/useComponents";
import { Footer } from "../../../../components/Footer/Footer";
import { HeroShowCase } from "./components/HeroShowCase";
import { ComponentsGallery } from "./components/ComponentsGallery";

const ComponentShowCase = () => {
  const { components, error, loading } = useComponents();

  if (loading) return <p className="text-white">Cargando componentes...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="w-full h-auto flex flex-col gap-8">
      <HeroShowCase />

      <ComponentsGallery />
  
     <Footer/>   
     </div>
  );
};

export default ComponentShowCase;
