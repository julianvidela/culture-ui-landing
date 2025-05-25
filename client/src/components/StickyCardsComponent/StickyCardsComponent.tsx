"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { Text } from "@/components/Atoms/Text/Text";

export interface StickyCardItem {
  title: string;
  description: string;
  iconComponent?: React.ReactNode;
  url?: string;
  color?: string;
}

interface StickyCardsStackProps {
  items: StickyCardItem[];
  minHeight?: string;
  cardHeight?: string;
  cardWidth?: string;
  startTop?: string;
  gap?: number;
}

export const StickyCardsStack = ({
  items = [],
  minHeight = "300vh",
  cardHeight = "360px",
  cardWidth = "630px",
  startTop = "5%",
  gap = 25,
}: StickyCardsStackProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={container}
      className={clsx("relative w-full", `min-h-[${minHeight}]`)}
    >
      {items.map((item, i) => {
        const targetScale = 1 - (items.length - i) * 0.05;
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
          : useTransform(scrollYProgress, opacityRange, [50, 0]);

        return (
          <div
            key={i}
            className={clsx(
              "sticky h-[70vh] flex items-center justify-center",
              `top-[${startTop}]`
            )}
          >
            <motion.div
              style={{
                scale,
                opacity,
                y,
                top: `calc(-5vh + ${i * gap}px)`,
              }}
              className={clsx(
                `relative -top-[25%] w-full  p-10`,
                `h-auto min-h-[320px] md:h-[${cardHeight}]`,
                `md:w-[${cardWidth}] min-h-[${cardHeight}] max-h-[${cardHeight}]`,
                `flex flex-col justify-center bg-black rounded-[25px] border border-[var(--border-primary)] overflow-hidden text-white p-8 origin-top shadow-xl`
              )}
            >
              <div
                className="absolute blur-[120px] -bottom-[60%] w-full h-36"
                style={{ backgroundColor: item.color || "#444" }}
              />

              <div className="flex flex-col justify-center  h-full my-8 gap-6">
                {item.iconComponent ? (
                  <div className="flex items-center w-auto">
                    {item.iconComponent}
                  </div>
                ) : null}
                <div className="flex flex-col gap-4">
                  <h2 className="text-[16px] md:text-3xl font-semibold" >
                    {item.title}
                  </h2>
                  <Text as="p" size="normal" fontWeight="600" color="primary">
                    {item.description}
                  </Text>
                  {item.url && (
                    <span className="flex items-center gap-2 mt-4">
                      <Link
                        href={item.url}
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
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </section> 
  );
};

