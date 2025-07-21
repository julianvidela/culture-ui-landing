import { useEffect } from "react";

interface UseCommandPaletteHotkeyProps {
  onToggle: () => void;
}

export function useCommandPaletteHotkey({ onToggle }: UseCommandPaletteHotkeyProps) {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onToggle(); 
      }
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, [onToggle]);
}
