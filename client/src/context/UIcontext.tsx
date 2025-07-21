

"use client";

import { createContext, useContext, useEffect, useRef, useState, useMemo } from "react";

interface UIContextType {
  isScrollLocked: boolean;
  lockScroll: (id: string) => void;
  unlockScroll: (id: string) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollLocks = useRef<Set<string>>(new Set());
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  // const lockScroll = (id: string) => {
  //   scrollLocks.current.add(id);
  //   if (scrollLocks.current.size === 1) {
  //     document.body.style.overflow = "hidden";
  //     document.body.setAttribute("data-lenis-prevent", "true");
  //     setIsScrollLocked(true);
  //   }
  // };

  // const unlockScroll = (id: string) => {
  //   scrollLocks.current.delete(id);
  //   if (scrollLocks.current.size === 0) {
  //     document.body.style.overflow = "auto";
  //     document.body.removeAttribute("data-lenis-prevent");
  //     setIsScrollLocked(false);
  //   }
  // };


  const lockScroll = (id: string) => {
  scrollLocks.current.add(id);
  if (scrollLocks.current.size === 1) {
    // Calcula el ancho del scrollbar (si existe)
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Solo agrega padding si hay un scrollbar visible
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    document.body.style.overflow = "hidden";
    document.body.setAttribute("data-lenis-prevent", "true");
    setIsScrollLocked(true);
  }
};

const unlockScroll = (id: string) => {
  scrollLocks.current.delete(id);
  if (scrollLocks.current.size === 0) {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = ""; 
    document.body.removeAttribute("data-lenis-prevent");
    setIsScrollLocked(false);
  }
};


  const contextValue = useMemo(
    () => ({
      isScrollLocked,
      lockScroll,
      unlockScroll,
    }),
    [isScrollLocked] 
  );

  return (
    <UIContext.Provider value={contextValue}>
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = () => {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUIContext must be used within a UIProvider");
  return ctx;
};
