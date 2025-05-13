"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import  GithubIcon from "@/common/assets/icons/GithubIcon";
import { Text } from "@/components/Atoms/Text/Text";
import { Coffee } from "lucide-react";
import ShinyText from "@/components/Atoms/ShinyText/ShinyText";
import { FancyButton } from "@/components/Atoms/FancyButton/FancyButton";

export const ContributeSection = () => {
  return (
    <section className="relative py-16 md:py-52 px-6 w-full flex justify-center items-center overflow-hidden">
      {/* Fondo difuminado */}
      <div
        className="absolute inset-0 -z-10 top-[90%] blur-[120px] opacity-40"
        style={{
          background: "radial-gradient(circle at center, #4f46e5 0%, #0f172a 100%)",
        }}
      />

      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" w-[95%] md:w-[50%] rounded-3xl flex flex-col gap-10 md:p-14 text-center"
      >
       
        <h2 className="text-center text-[50px] md:text-[64px] font-bold text-gray-800 dark:text-white">
                Help CultureUI Grow 🚀
            </h2>
        <ShinyText className="font-semibold" text={"CultureUI is a community-driven project. Your support helps us build better tools, faster. Contribute code, ideas, or buy me a coffee ☕."}         
        />
          
        

        <div className="flex flex-wrap justify-center gap-4">
          <FancyButton >
          <Link
            href="https://github.com/julianvidela/Culture-Ui"
            target="_blank"
            className="flex items-center gap-3 "
          >
            <GithubIcon size={16} />
            Star on GitHub
          </Link>
          </FancyButton>
       
          <FancyButton>
            <Link
              href="https://www.buymeacoffee.com/julianvidela"
              target="_blank"
              className="flex gap-3 justify-center items-center"
            >
              Buy me a coffee
              <Coffee size={16} />
            </Link>
          </FancyButton>
           
        </div>
      </motion.div>
    </section>
  );
};
