"use client";

import { StickyTechStackSection } from "./components/TechShowcase/TechShowcase";
import ScrollReveal from "../../../../components/Atoms/ScrollFloat/ScrollFloat";
import { Text } from "@/components/Atoms/Text/Text";

export const TechShowcaseSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row w-full gap-10 m-auto h-auto my-52">
      <div className=" w-full md:w-[45%] flex flex-col gap-5 justify-center md:sticky top-[25%] h-fit ">
        <div className="w-fit  px-5 py-2 bg-black rounded-full border border-[var(--border-primary)]">
          <Text as="p" color="secondary" fontWeight="700" size="normal">
            Creative Power ✨
          </Text>
        </div>
        <ScrollReveal
          className="text-center w-[80%] md:text-left text-[16px] md:text-[40px] font-semibold  text-zinc-800 dark:text-white"
          text="Built with technologies developers love - efficiency and developer experience"
        />
      </div>

      <div className="flex-grow w-full md:w-[50%]">
        <StickyTechStackSection />
      </div>
    </section>
  );
};
