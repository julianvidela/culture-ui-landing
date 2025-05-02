"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface MotionTextProps {
  text: string;
  delayStep?: number;
  direction?: "up" | "down";
  loop?: boolean;
  className?: string;
  interval?: number; 
}

export const MotionText: React.FC<MotionTextProps> = ({
  text,
  delayStep = 0.06,
  direction = "up",
  loop = false,
  interval = 3000,
  className,
}) => {
  const words = text.split(" ");
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    if (!loop) return;

    const timer = setInterval(() => {
      setIteration((prev) => prev + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [loop, interval]);

  const getInitialY = direction === "up" ? "100%" : "-100%";
  const getExitY = direction === "up" ? "-100%" : "100%";

  return (
    <div className={clsx("inline-block overflow-hidden", className)} key={iteration}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block mr-2 overflow-hidden">
          <motion.span
            initial={{ y: getInitialY, opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: getExitY, opacity: 0 }}
            transition={{
              delay: index * delayStep,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
};
