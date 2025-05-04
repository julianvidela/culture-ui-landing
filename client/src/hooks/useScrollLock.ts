import { useEffect } from "react";

export function useScrollLock(isLocked: boolean) {
    useEffect(() => {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (isLocked) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      } else {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
  
      return () => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      };
    }, [isLocked]);
  }
  