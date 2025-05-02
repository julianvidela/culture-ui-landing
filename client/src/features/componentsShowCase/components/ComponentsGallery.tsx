
import { AvatarStack } from "@/components/cultureui/AvatarStack/AvatarStack";
import Carousel from "@/components/cultureui/Carrusel/Carrusel";
import { FloatingNavBar } from "@/components/cultureui/FloatingNavBar/FloatingNavBar";
import { MotionText } from "@/components/cultureui/MotionText/MotionText";
import { SocialSelector } from "@/components/cultureui/SocialSelector/SocialSelector";
import { StatsWidget } from "@/components/cultureui/StatsWidget/StatsWidget";
import { Home, Search, TrendingUp, User } from "lucide-react";

export const ComponentsGallery = () => {
  return (
    <div className="flex flex-col gap-8">
     
      <div className="flex items-end justify-center w-full">
        <div className="relative rounded-xl w-full h-[200px] px-8 flex items-center justify-center overflow-hidden">
          <div className="absolute bg-sky-600 blur-[120px] opacity-35 top-[100%] w-36 h-36" />
          <FloatingNavBar
            items={[
              {
                id: "home",
                icon: <Home size={24} strokeWidth={2} />,
                href: "",
              },
              {
                id: "search",
                icon: <Search size={24} strokeWidth={2} />,
                href: "",
              },
              {
                id: "profile",
                icon: <User size={24} strokeWidth={2} />,
                href: "",
              },
            ]}
            bgColor="#24242430"
            indicatorColor="#242424630"
            iconColor="#808080"
            activeIconColor="#ffffff"
          />
        </div>
      </div>

      
      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 md:gap-10">
        <div className="relative rounded-xl w-full text-center md:w-auto h-[200px] px-8 flex items-center justify-center overflow-hidden">
          <div className="absolute bg-yellow-600 blur-[120px] bottom-[100%] w-36 h-36" />
          <MotionText
            text="Turn ideas into sleek interfaces!"
            loop
            delayStep={0.1}
            interval={4000}
            direction="down"
            className="text-[30px] font-bold text-white"
          />
        </div>

        <div className="relative rounded-xl w-full lg:w-[450px] h-[280px] flex items-center justify-center overflow-hidden">
          <div className="absolute bg-violet-900 blur-[120px] top-[100%] lg:right-[5%] w-36 h-36" />
          <AvatarStack
          
            people={[
              {
                image:
                  "https://img.freepik.com/fotos-premium/mujer-joven-sobre-escucha-musica-azul-aislado_1368-133884.jpg",
                name: "Laura Martínez",
                role: "Product Manager",
              },
              {
                image:
                  "https://img.freepik.com/fotos-premium/mujer-joven-sobre-escucha-musica-azul-aislado_1368-133884.jpg",
                name: "Juan Ignacio",
                role: "Frontend Dev",
              },
              {
                image:
                  "https://img.freepik.com/fotos-premium/mujer-joven-sobre-escucha-musica-azul-aislado_1368-133884.jpg",
                name: "Eliana Ramos",
                role: "UX Researcher",
              },
              {
                image:
                  "https://img.freepik.com/fotos-premium/mujer-joven-sobre-escucha-musica-azul-aislado_1368-133884.jpg",
                name: "Eliana Ramos",
                role: "UX Researcher",
              },
            ]}
            maxVisible={3}
            
          />
        </div>
      </div>

     
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center w-full gap-6 md:gap-10">
        <div className="relative rounded-xl w-full lg:w-[450px] h-[260px] flex items-center justify-center overflow-hidden">
          <div className="absolute bg-zinc-50 blur-[120px] top-[100%] w-36 h-36" />
          <SocialSelector iconSize={18} variant="default" className="text-white" />
        </div>

        <div className="relative rounded-xl w-full lg:w-[450px] h-[280px] flex items-center justify-center overflow-hidden px-4">
          <div className="absolute bg-violet-900 blur-[120px] top-[100%] w-36 h-36" />
          <StatsWidget
            title="Total Users"
            value="12.4K"
            change="+8.2%"
            status="positive"
            icon={<TrendingUp size={20} />}
            description="since last month"
            className="transparent"
          />
        </div>
      </div>

  
      <div className="relative rounded-xl w-full p-4 flex items-center justify-center overflow-hidden">
        <div className="absolute bg-blue-300 blur-[120px] bottom-[100%] w-36 h-36" />
        <Carousel
          data={[
            {
              image:
                "https://img.freepik.com/foto-gratis/mujeres-riendo-felices-tomando-cafe_23-2148850668.jpg?semt=ais_hybrid&w=740",
              title: "Custom Slide 1",
              description: "A more detailed description of the first custom item.",
            },
            {
              image:
                "https://img.freepik.com/foto-gratis/mujeres-tiro-medio-hablando-terapia_23-2148913068.jpg",
              title: "Custom Slide 2",
              description: "A more detailed description of the second custom item.",
            },
          ]}
          height="230px"
          width="350px"
          descColor="white"
          titleWeight="bold"
          descWeight="medium"
          titleColor="white"
        />
      </div>
    </div>
  );
};
