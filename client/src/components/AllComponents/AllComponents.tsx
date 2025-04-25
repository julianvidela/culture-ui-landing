"use client";

import { useComponents } from "@/hooks/useComponents";
import { Home, Search, TrendingUp, User } from "lucide-react";
import { MotionText } from "../cultureui/MotionText/MotionText";
import { Text } from "../Atoms/Text/Text";
import { AvatarStack } from "../cultureui/AvatarStack/AvatarStack";
import { SocialSelector } from "../cultureui/SocialSelector/SocialSelector";
import Carousel from "../cultureui/Carrusel/Carrusel";
import { FloatingNavBar } from "../cultureui/FloatingNavBar/FloatingNavBar";
import { StatsWidget } from "../cultureui/StatsWidget/StatsWidget";
import { Footer } from "../Footer/Footer";
import { Button } from "../Atoms/Button/Button";
import Link from "next/link";
import { AnimatedTooltip } from "../cultureui/TooltipAnimated/TooltipAnimated";
import { FloatingHelper } from "@/helpers/lib/FloatingHelper";

const customSlides = [
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
];

const ComponentList = () => {
  const { components, error, loading } = useComponents();

  if (loading) return <p className="text-white">Cargando componentes...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="w-full h-auto flex flex-col my-16 px-4 gap-8">
      <div className="h-[15rem] flex flex-col items-center  justify-end w-full gap-5 overflow-hidden mb-20">
        <div className="flex items-center">
          <Text as="h2" size="extra-large" fontWeight="800" color="secondary">
            Desing Showcase
          </Text>
        </div>
        <div className="w-[50%] flex items-center text-center">
          <Text as="p" size="normal" fontWeight="600" color="primary">
            Visual reference for all UI components in the system. See how each
            element looks and behaves in real-world usage.
          </Text>
        </div>
        <div className="w-full flex gap-4 sm:gap-6 justify-center">
          <Button
            fontSize="14px"
            backgroundColor="white"
            fontWeight="600"
            textColor="black"
          >
            <Link href="/docs">Get Started</Link>
          </Button>
        </div>
      </div>
      <div className="flex items-end justify-center w-full">
        <div className="relative  rounded-xl w-full h-[200px] px-8 flex items-center justify-center overflow-hidden">
          <div className="absolute bg-sky-600 blur-[120px] opacity-35  top-[100%] w-36 h-36" />
          <FloatingNavBar
            items={[
              {
                id: "home",
                icon: <Home size={24} strokeWidth={1} />,
                href: "",
              },
              {
                id: "search",
                icon: <Search size={24} strokeWidth={1} />,
                href: "",
              },
              {
                id: "profile",
                icon: <User size={24} strokeWidth={1} />,
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
      <div className="flex items-center justify-center w-full gap-10">
        <div className="relative  rounded-xl w-auto h-[200px] px-8 flex items-center justify-center overflow-hidden">
          <div className="absolute bg-yellow-600 blur-[120px]  bottom-[100%] w-36 h-36" />

          <MotionText
            text="Turn ideas into sleek interfaces!"
            loop
            delayStep={0.1}
            interval={4000}
            direction="down"
            className="text-[30px] font-bold text-white"
          />
        </div>

        <div className="relative  rounded-xl w-[500px] h-[280px] flex items-center justify-center overflow-hidden">
          <div className="absolute bg-violet-900 blur-[120px]  right-[5%] w-36 h-36" />
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
      <div className="flex items-start flex-row-reverse justify-center w-full gap-10">
        <div className="relative  rounded-xl w-[500px] h-[260px] flex items-center justify-center overflow-hidden">
          <div className="absolute bg-zinc-50 blur-[120px] top-[100%] w-36 h-36" />

          <SocialSelector
            iconSize={18}
            variant="default"
            className="text-white"
          />
        </div>
        <div className="relative  rounded-xl w-[500px] gap-10 h-[280px] flex items-center justify-center overflow-hidden px-4">
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
      <div
        id="component-carousel"
        className="relative  rounded-xl w-auto h-auto p-4 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute bg-blue-300 blur-[120px] bottom-[100%] w-36 h-36" />

        <Carousel
          data={customSlides}
          height="230px"
          width="400px"
          descColor="white"
          titleWeight="bold"
          descWeight="medium"
          titleColor="white"
        />
      </div>
      <div className="absolute top-[60%] right-[20%] ">
        <FloatingHelper tooltip="Hi Word">
          <p className="bg-black border border-[var(--border-primary)] text-[25px]  px-4 py-2 rounded-full">
            👨🏻‍🚀
          </p>
        </FloatingHelper>
      </div>
      <div className="absolute top-[64%] left-[20%] ">
      <FloatingHelper tooltip="Hi Word" className="">
          <p className="bg-black border border-[var(--border-primary)] text-[25px]  px-4 py-3 rounded-full">
            🚀
          </p>
        </FloatingHelper>
      </div>
      <div className="absolute bottom-[60%] left-[22%] ">
      <FloatingHelper tooltip="Hi Word" className="">
          <p className="bg-black border border-[var(--border-primary)] text-[50px]  px-4 py-3 rounded-full">
            ✨
          </p>
        </FloatingHelper>
      </div>
      <div className="absolute bottom-[60%] right-[23%] ">
      <FloatingHelper tooltip="Hi Word" className="">
          <p className="bg-black border border-[var(--border-primary)] text-[50px]  px-4 py-3 rounded-full">
            🎨
          </p>
        </FloatingHelper>
      </div>
      <div className="absolute bottom-[45%] right-[12%] ">
      <FloatingHelper tooltip="Hi Word" className="">
          <p className="bg-black border text-white border-[var(--border-primary)] text-[30px] font-extrabold  px-4 py-3 rounded-full">
            🌀
          </p>
        </FloatingHelper>
      </div>
      <div className="absolute bottom-[40%] left-[12%] ">
      <FloatingHelper tooltip="Hi Word" className="">
          <p className="bg-black border border-[var(--border-primary)] text-[40px]  px-4 py-3 rounded-full">
            🎱
          </p>
        </FloatingHelper>
      </div>
      <Footer />
    </div>
  );
};

export default ComponentList;
