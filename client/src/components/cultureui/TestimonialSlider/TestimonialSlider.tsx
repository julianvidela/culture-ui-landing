"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

export interface Testimonial {
  avatar: string;
  name: string;
  role?: string;
  quote?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  delay?: number;
  showControls?: boolean;
  width?: string;
  height?: string;
  cardBg?: string;
  cardBorder?: string;
  quoteSize?: string;
  quoteWeight?: "normal" | "medium" | "semibold" | "bold";
  italic?: boolean;
  textColor?: string;
  nameColor?: string;
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
  autoPlay = true,
  delay = 6000,
  showControls = true,
  width,
  height,
  cardBg = "#000000",
  cardBorder = "1px solid var(--border-primary)",
  quoteSize = "14px",
  quoteWeight = "normal",
  italic = true,
  textColor = "#d4d4d8",
  nameColor = "#ffffff",
}) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const paginate = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((prev) =>
      dir === 1
        ? (prev + 1) % testimonials.length
        : (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => paginate(1), delay);
    return () => clearInterval(interval);
  }, [index, autoPlay, delay]);

  const current = testimonials[index];

  return (
    <div className="relative w-full max-w-2xl flex flex-col gap-4 mx-auto">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={clsx(
            "flex flex-col items-center text-center rounded-xl p-6 gap-4"
          )}
          style={{
            width: width || "500px",
            height: height || "220px",
            background: cardBg,
            border: cardBorder,
          }}
        >
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white">
            <img
              src={current.avatar}
              alt={current.name}
              className="w-full h-full object-cover"
            />
          </div>

          <p
            className={clsx({ italic })}
            style={{
              fontSize: quoteSize,
              fontWeight:
                quoteWeight === "semibold"
                  ? 600
                  : quoteWeight === "bold"
                  ? 700
                  : quoteWeight === "medium"
                  ? 500
                  : 400,

              color: textColor,
              maxWidth: "90%",
            }}
          >
            {`"${current.quote}"`}
          </p>

          <div>
            <p className="font-semibold" style={{ color: nameColor }}>
              {current.name}
            </p>
            {current.role && (
              <p className="text-zinc-500 text-sm">{current.role}</p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {showControls && (
  <div
    className="flex justify-center gap-6"
    style={{
      width: width || "500px", 
      margin: "0 auto",
    }}
  >
    <button
      onClick={() => paginate(-1)}
      className="p-2 bg-[#ffffff0a] hover:bg-[#ffffff14] rounded-full"
    >
      <ChevronLeft size={20} stroke="#fff" />
    </button>
    <button
      onClick={() => paginate(1)}
      className="p-2 bg-[#ffffff0a] hover:bg-[#ffffff14] rounded-full"
    >
      <ChevronRight size={20} stroke="#fff" />
    </button>
  </div>
)}
    </div>
  );
};


