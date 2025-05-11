"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Lenis from "lenis";
import Link from "next/link";
import { Text } from "@/components/Atoms/Text/Text";
import "./techsshowcase.css";
import NextjsLogo from "@/common/assets/icons/LogoNext";

import LogoTailwind from "@/common/assets/icons/LogoTailwind";
import LogoMotion from "@/common/assets/icons/LogoMotion";

import LogoTypescript from "@/common/assets/icons/LogoTypescript";

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
    title: "Motion for React examples",
    description: "Animaciones fluidas para React.",
    iconComponent: <LogoTypescript color="#3178c6" size={26} />,
    url: "",
    color: "#3178c6",
  },
  {
    title: "Tailwind CSS",
    description: "Utilidades atómicas para construir diseños rápidos.",
    iconComponent: <LogoTailwind textColor="#ffffff" width={200} height={45} />,
    url: "",
    color: "#0ea5e9",
  },
  {
    title: "Motion for React examples",
    description: "Tnimaciones fluidas para React.",
    iconComponent: <LogoMotion color="#fff42b" width={45} height={45} />,
    url: "",
    color: "#fff42b",
  },
];

export const StickyTechStackSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <section ref={container} className="relative min-h-[300vh] ">
      {techStack.map((tech, i) => {
        const targetScale = 1 - (techStack.length - i) * 0.05;
        const start = i * 0.25;
        const range: [number, number] = [start, 1];
        const isFirst = i === 0;

        const scale = useTransform(scrollYProgress, range, [1, targetScale]);

        const opacityStart = Math.max(start - 0.14, 0);
        const opacityRange: [number, number] = [opacityStart, start + 0.01];

        const opacity = isFirst
          ? 1
          : useTransform(scrollYProgress, opacityRange, [0, 1]);
        const y = isFirst
          ? 0
          : useTransform(scrollYProgress, opacityRange, [40, 0]);

        return (
          <div
            key={i}
            className="sticky top-[5%] h-[70vh] gap-10 flex items-center justify-center"
          >
            <motion.div
              style={{
                scale,
                opacity,
                y,
                top: `calc(-5vh + ${i * 25}px)`,
              }}
              className="relative -top-[25%] h-[350px] w-full md:w-[630px] flex flex-col bg-black rounded-[25px] border  border-[var(--border-primary)] overflow-hidden text-white p-8 origin-top shadow-xl"
            >
              <div
                className="absolute blur-[120px] -bottom-[60%] w-full h-36"
                style={{
                  backgroundColor: tech.color,
                }}
              />

              <div className="flex flex-col justify-center h-full my-8 gap-6">
                <div className=" w-full h-auto overflow-hidden">
                  <div className="flex justify-start items-center ">
                    {tech.iconComponent && (
                      <div className=" rounded-full flex items-center justify-center">
                        {tech.iconComponent}
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                  <Text as="h2" size="medium" fontWeight="700">
                    {tech.title}
                  </Text>
                  <Text
                    className=""
                    as="p"
                    size="small"
                    fontWeight="600"
                    color="primary"
                  >
                    {tech.description}
                  </Text>
                  <span className="flex items-center gap-2 mt-4">
                    <Link
                      href={tech.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] underline cursor-pointer"
                    >
                      See more
                    </Link>
                    <svg
                      width="22"
                      height="12"
                      viewBox="0 0 22 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
};
