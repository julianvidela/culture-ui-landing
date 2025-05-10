"use client";

import { StickyTechStackSection } from "./components/TechShowcase/TechShowcase";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const TechShowcaseSection = () => {
  const titleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const color = useTransform(scrollYProgress, [0, 1], ["#71717a", "#ffffff"]); 

  return (
    <section className="relative flex flex-col md:flex-row w-full gap-10 m-auto h-auto my-52">
      
      <div className=" w-full md:w-[45%] flex justify-center md:sticky top-[25%] h-fit ">
        <motion.h2
          ref={titleRef}
          style={{ opacity, color }}
          className="text-center md:text-left text-[16px] md:text-[40px] font-semibold  text-zinc-800 dark:text-white"
        >
          Built with technologies developers love - efficiency and developer experience
        </motion.h2>
      </div>

      
      <div className="flex-grow w-full md:w-[50%]">
        <StickyTechStackSection />
      </div>
    </section>
  );
};
