"use client";

import { useComponents } from "@/hooks/useComponents";
import Accordion from "@/components/cultureui/Accordion/FaqAccordion";
import { Modal } from "../cultureui/Modal/Modal";
import { ImagesGallery } from "../cultureui/ImagesGallery/ImagesGallery";
import { AnimatedTooltip } from "../cultureui/TooltipAnimated/TooltipAnimated";
import { AvatarStack } from "../cultureui/AvatarStack/AvatarStack";




const slides = [
  {
    image: "https://st4.depositphotos.com/1017228/19704/i/450/depositphotos_197041442-stock-photo-joyous-american-woman-orange-shirt.jpg",
    title: "Title 1",
    description: "Description of the first item."
  },
  {
    image: "https://img.freepik.com/fotos-premium/mujer-joven-escuchando-musica-movil-sobre-pared-azul-aislado_1368-56714.jpg",
    title: "Title 2",
    description: "Description of the second item."
  },
  {
    image: "https://img.freepik.com/fotos-premium/mujer-joven-sobre-escucha-musica-azul-aislado_1368-133884.jpg",
    title: "Title 3",
    description: "Description of the third item."
  }
];




const ComponentList = () => {
  const { components, error, loading } = useComponents();

  if (loading) return <p className="text-white">Cargando componentes...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="text-white my-16 w-full flex flex-col justify-center items-center">
      <div className="grid grid-cols-3">
     
     <div className="h-[100px] w-[350px] p-4 flex justify-center items-center rounded-lg">
      <Modal 
       border="1px solid #3f3f46"
       backgroundColor="white" 
       imageSrc="https://img.freepik.com/fotos-premium/mujer-joven-sobre-escucha-musica-azul-aislado_1368-133884.jpg"
       successMessageText="white"
        />
     </div>

      </div>
      <div className="">

   
     <AnimatedTooltip content="Copiar al portapapeles" position="top">
     <button className="bg-white text-black px-3 py-2 rounded-md">📋</button>
     </AnimatedTooltip>
       
  
      
      </div>
      <div className="mt-32">
      <AvatarStack
  people={[
    {
      image: "https://img.freepik.com/fotos-premium/mujer-joven-sobre-escucha-musica-azul-aislado_1368-133884.jpg",
      name: "Laura Martínez",
      role: "Product Manager",
    },
    {
      image: "https://img.freepik.com/fotos-premium/mujer-joven-sobre-escucha-musica-azul-aislado_1368-133884.jpg",
      name: "Juan Ignacio",
      role: "Frontend Dev",
    },
    {
      image: "https://img.freepik.com/fotos-premium/mujer-joven-sobre-escucha-musica-azul-aislado_1368-133884.jpg",
      name: "Eliana Ramos",
      role: "UX Researcher",
    },
    {
      image: "https://img.freepik.com/fotos-premium/mujer-joven-sobre-escucha-musica-azul-aislado_1368-133884.jpg",
      name: "Eliana Ramos",
      role: "UX Researcher",
    },
    {
      image: "https://img.freepik.com/fotos-premium/mujer-joven-sobre-escucha-musica-azul-aislado_1368-133884.jpg",
      name: "Eliana Ramos",
      role: "UX Researcher",
    },
    {
      image: "https://img.freepik.com/fotos-premium/mujer-joven-sobre-escucha-musica-azul-aislado_1368-133884.jpg",
      name: "Eliana Ramos",
      role: "UX Researcher",
    },
  ]}
  tooltipPosition="top"
  maxVisible={5}
/>

      </div>
    </div>
  );
};

export default ComponentList;
