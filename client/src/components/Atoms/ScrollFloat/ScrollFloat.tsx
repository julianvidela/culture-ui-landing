"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface ScrollRevealProps {
  text: string;
  className?: string;
  delayStep?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  text,
  className = "",
  delayStep = 0.1,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px 0px -20px 0px",
    once: false,
  });

  useEffect(() => {
    controls.start((i) => ({
      opacity: isInView ? 1 : 0,
      filter: isInView ? "blur(0px)" : "blur(6px)",
      y: isInView ? 0 : 20,
      transition: {
        duration: 0.6,
        delay: i * delayStep,
        ease: "easeOut",
      },
    }));
  }, [isInView, controls, delayStep]);

  const words = text.split(" ");

  return (
    <h2 ref={ref} className={className}>
      <div className="flex flex-wrap gap-x-2 ">
        {words.map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            initial={{ opacity: 0, filter: "blur(6px)", y: 20 }}
            animate={controls}
            className="inline-block "
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </div>
    </h2>
  );
};

export default ScrollReveal;
