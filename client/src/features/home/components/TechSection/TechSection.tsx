"use client";

import  { StickyCardsStack } from "../../../../components/StickyCardsComponent/StickyCardsComponent";
import ScrollReveal from "../../../../components/Atoms/ScrollFloat/ScrollFloat";
import { Text } from "@/components/Atoms/Text/Text";
import { techStack } from "./TechData";



export const TechShowcaseSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row w-full gap-10 m-auto h-auto my-10 md:-my-32 lg:my-52 px-2">
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
  
  className="w-[85%] md:w-[80%] lg:w-[75%] text-[35px] md:text-[50px] lg:text-[38px] font-semibold text-zinc-800 dark:text-white"
/>



      </div>

      <div className="flex-grow flex lg:w-[55%]">
        <StickyCardsStack items={techStack}  cardHeight="400px"/>
      </div>
    </section>
  );
};
