"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import clsx from "clsx";

interface ComponentOption {
  id: string;
  label: string;
  targetId: string; // id del elemento al que scrollea
}

interface ComponentCommandPaletteProps {
  options: ComponentOption[];
}

export const ComponentCommandPalette: React.FC<ComponentCommandPaletteProps> = ({
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = options.filter((opt) =>
    opt.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
    setQuery("");
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-zinc-900 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-2 border border-zinc-700 shadow-md"
      >
        <Search size={16} />
        Search component
        <kbd className="ml-2 text-xs text-zinc-400">⌘K</kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-2 bg-[#0A0A0A] border border-[var(--border-primary)] rounded-xl shadow-lg w-80 p-3"
          >
            <div className="flex items-center gap-2 mb-2">
              <Search size={16} className="text-zinc-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent text-sm w-full outline-none text-white placeholder-zinc-500"
              />
              <button onClick={() => setIsOpen(false)}>
                <X size={16} className="text-zinc-400" />
              </button>
            </div>

            <div className="max-h-60 overflow-y-auto flex flex-col gap-1">
              {filtered.length > 0 ? (
                filtered.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(opt.targetId)}
                    className="text-left w-full px-3 py-2 text-sm text-zinc-300 rounded hover:bg-zinc-800 transition-colors"
                  >
                    {opt.label}
                  </button>
                ))
              ) : (
                <p className="text-sm text-zinc-500 px-3 py-2">No matches.</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


//ejemplo de uso
{/* <ComponentCommandPalette
options={[
  { id: "btn", label: "Button", targetId: "component-button" },
  { id: "card", label: "Card", targetId: "component-card" },
  { id: "carousel", label: "Carousel", targetId: "component-carousel" },
]}
/> */}