

import { useEffect, useId, useRef } from "react";
import { useUIContext } from "@/context/UIcontext";

export function useScrollLock(isLocked: boolean) {
  const { lockScroll, unlockScroll } = useUIContext();
  const id = useId();
  const lockedRef = useRef(false); 

  useEffect(() => {
    if (isLocked && !lockedRef.current) {
      lockScroll(id);
      lockedRef.current = true;
    }

    if (!isLocked && lockedRef.current) {
      unlockScroll(id);
      lockedRef.current = false;
    }

    return () => {
      if (lockedRef.current) {
        unlockScroll(id);
        lockedRef.current = false;
      }
    };
  }, [isLocked]);
}
