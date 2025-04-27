"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

interface FloatingHelperProps {
  tooltip: string;
  children: React.ReactNode;
  className?: string;
}

export const FloatingHelper: React.FC<FloatingHelperProps> = ({
  tooltip,
  children,
  className,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
    className={clsx("relative inline-flex", className)}
    animate={{ y: [0, -4, 0] }}
    transition={{
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    }}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
  >
      {children}

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 text-sm bg-zinc-800 text-white rounded-md shadow-md whitespace-nowrap z-50 pointer-events-none"
          >
            {tooltip}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
