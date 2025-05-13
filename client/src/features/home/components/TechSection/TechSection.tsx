"use client";

import  { StickyCardsStack } from "../../../../components/StickyCardsComponent/StickyCardsComponent";
import ScrollReveal from "../../../../components/Atoms/ScrollFloat/ScrollFloat";
import { Text } from "@/components/Atoms/Text/Text";
import NextjsLogo from "@/common/assets/icons/LogoNext";
import LogoTypescript from "@/common/assets/icons/LogoTypescript";
import LogoTailwind from "@/common/assets/icons/LogoTailwind";
import LogoMotion from "@/common/assets/icons/LogoMotion";



const techStack = [
  {
    title: "The React Framework for the Web",
    description:
      "Used by some of the world’s largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
    iconComponent: <NextjsLogo color="#ffffff" width={200} height={30} />,
    url: "",
    color: "#CF6700",
  },
  {
    title: "Is a superset of javascript",
    description: "TypeScript brings type safety and modern tooling to JavaScript, making development more robust and enjoyable.",
    iconComponent: <LogoTypescript color="#3178c6" size={26} />,
    url: "",
    color: "#3178c6",
  },
  {
    title: "The Modern CSS Framework",
    description: "Tailwind is unapologetically modern, and takes advantage of all the latest and greatest CSS features to make the developer experience as enjoyable as possible.",
    iconComponent: <LogoTailwind textColor="#ffffff" width={200} height={45} />,
    url: "",
    color: "#0ea5e9",
  },
  {
    title: "Animations for React",
    description: "Framer Motion provides a simple yet powerful way to create animations and interactions for React applications, enhancing user experience with smooth transitions.",
    iconComponent: <LogoMotion color="#fff42b" width={45} height={45} />,
    url: "",
    color: "#fff42b",
  },
];

export const TechShowcaseSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row w-full gap-10 m-auto h-auto my-10 md:my-52 px-2">
      <div className=" w-full lg:w-[45%] flex flex-col gap-5 justify-center items-center lg:items-start lg:sticky top-[25%] h-fit ">
        <div className="w-fit  px-5 py-2 bg-black rounded-full border border-[var(--border-primary)]">
          <Text as="p" color="secondary" fontWeight="700" size="normal">
            Creative Power ✨
          </Text>
        </div>
        
  <ScrollReveal
  text="Built with technologies developers love"
  
           justifyContentH2={{ base: "center", lg: "start" }}
  justifyContainer={{ base: "center", lg: "start" }}
  align={{ base: "center", lg: "left" }}
  
  className="w-[85%] md:w-[75%] text-[35px] md:text-[38px] font-semibold text-zinc-800 dark:text-white"
/>



      </div>

      <div className="flex-grow flex lg:w-[55%]">
        <StickyCardsStack items={techStack}  cardHeight="400px"/>
      </div>
    </section>
  );
};
