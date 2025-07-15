

import React from "react";
import "./fancyButton.css";
import clsx from "clsx";

interface BestiaButtonProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  
  
}

export const FancyButton: React.FC<BestiaButtonProps> = ({
  children,
  variant = "light",
  
}) => {
  const bgClass = variant === "light" ? "light" : "dark";


  return (
    <button
      className={clsx(
        "button--bestia",
        bgClass,
        "relative inline-flex items-center justify-center overflow-hidden px-10 py-3 w-full border border-[var(--border-primary)]  ",
        
      )}
    >
      <div className="button__bg" />
      <div className="text-white relative z-10 mix-blend-difference font-semibold text-[14px]">
        {children}
      </div>
      
    </button>
  );
};
