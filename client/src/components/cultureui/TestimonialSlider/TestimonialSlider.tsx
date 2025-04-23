"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export interface Testimonial {
  avatar: string;
  name: string;
  role?: string;
  quote: string;
}

interface TestimonialSliderProps {
    testimonials: Testimonial[];
    autoPlay?: boolean;
    delay?: number;
    showControls?: boolean;
    className?: string;
    width?: string;
    height?: string;
  }
  

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
  autoPlay = true,
  delay = 6000,
  showControls = true,
  className,
  height,
  width,
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
    <div className={`relative w-full max-w-2xl mx-auto ${className || ""}`}>
      <AnimatePresence mode="wait" initial={false}>
      <motion.div
  key={index}
  initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
  transition={{ duration: 0.4, ease: "easeInOut" }}
  className={`flex flex-col items-center text-center bg-[#0A0A0A] m-auto border border-[var(--border-primary)] rounded-xl p-6 gap-4 `}
  style={{
    width: width || "500px",
    height: height || "220px",
  }}
>

          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white">
        <img
        src={current.avatar}
        alt={`Slide ${current}`}
        className="w-full h-full object-cover rounded-lg"
      />
          </div>
          <p className="text-zinc-300 text-sm italic max-w-md">{`"${current.quote}"`}</p>
          <div>
            <p className="text-white font-semibold">{current.name}</p>
            {current.role && (
              <p className="text-zinc-500 text-sm">{current.role}</p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {showControls && (
  <div className="mt-4 flex justify-center gap-6">
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


// ejemplo de uso

{/* <TestimonialSlider
testimonials={[
  {
    avatar: "https://img.freepik.com/fotos-premium/mujer-joven-sobre-escucha-musica-azul-aislado_1368-133884.jpg",
    name: "Julia Rossi",
    role: "UX Designer",
    quote:
      "El diseño es impecable, pero lo que más me sorprendió fue la experiencia de desarrollo.",
  },
  {
    avatar: "https://img.freepik.com/fotos-premium/mujer-joven-sobre-escucha-musica-azul-aislado_1368-133884.jpg",
    name: "Leandro Piatti",
    role: "CTO @ CulturaDev",
    quote:
      "Integrarlo fue fácil, el sistema de props está muy bien pensado.",
  },
]}
autoPlay
delay={10000}
/> */}
