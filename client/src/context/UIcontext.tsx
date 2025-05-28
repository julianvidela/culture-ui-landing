"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

interface UIContextType {
  isScrollLocked: boolean;
  lockScroll: (id: string) => void;
  unlockScroll: (id: string) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollLocks = useRef<Set<string>>(new Set());
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  
useEffect(() => {
  isScrollLocked
}, [isScrollLocked]);

const lockScroll = (id: string) => {
  scrollLocks.current.add(id);
  if (scrollLocks.current.size === 1) {
    document.body.style.overflow = "hidden";
    document.body.setAttribute("data-lenis-prevent", "true"); 
    setIsScrollLocked(true);
  }
};

const unlockScroll = (id: string) => {
  scrollLocks.current.delete(id);
  if (scrollLocks.current.size === 0) {
    document.body.style.overflow = "auto";
    document.body.removeAttribute("data-lenis-prevent"); 
    setIsScrollLocked(false);
  }
};


  return (
    <UIContext.Provider
      value={{
        isScrollLocked,
        lockScroll,
        unlockScroll,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = () => {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUIContext must be used within a UIProvider");
  return ctx;
};
