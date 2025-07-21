import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import React, { useRef, useEffect } from "react";

interface Option {

  id: string;
  label: string;
  path?: string;
  targetId?: string;
  icon?: React.ReactNode;
  type?: "static" | "dynamic"; 
}

interface Props {
  isOpen: boolean;
  query: string;
  setQuery: (v: string) => void;
  options: Option[];
  onSelect: (option: Option) => void;
  onClose: () => void;
}

export const CommandPaletteModal: React.FC<Props> = ({
  isOpen,
  query,
  setQuery,
  options,
  onSelect,
  onClose,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const staticOptions = options.filter(opt => opt.type === "static");
  const dynamicOptions = options.filter(opt => opt.type === "dynamic");

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-lg flex justify-center items-center"
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-[#0A0A0A] border border-zinc-700 rounded-xl w-[500px] h-auto z-50 pb-1 overflow-hidden scrollbar-shadcn"
          >
            <div className="flex border-b-2 border-[var(--border-primary)]  items-center gap-2  p-4">
              <Search size={16} className="text-zinc-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent text-sm font-semibold w-full outline-none text-white placeholder-zinc-500"
              />
              <button onClick={onClose}>
                <X size={16} className="text-zinc-400" />
              </button>
            </div>

             <div className="max-h-72 overflow-y-auto flex flex-col gap-2 px-1 pt-4 ">
              {staticOptions.length > 0 && (
                <>
                  <div className="px-3 py-1 text-sm text-zinc-500 font-semibold">Menu</div>
                  {staticOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => onSelect(opt)}
                      className="text-left flex items-center w-full px-3 py-3 text-sm font-semibold rounded-md text-zinc-300 hover:bg-zinc-800 transition-colors"
                    >
                      {opt.icon && <span className="mr-2">{opt.icon}</span>}
                      {opt.label}
                    </button>
                  ))}
                </>
              )}

              {dynamicOptions.length > 0 && (
                <>
                  <div className="px-3 py-1 text-sm text-zinc-500 font-semibold">Components</div>
                  {dynamicOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => onSelect(opt)}
                      className="text-left flex items-center w-full px-3 py-3 text-sm font-semibold rounded-md text-zinc-300 hover:bg-zinc-800 transition-colors"
                    >
                      {opt.icon && <span className="mr-2">{opt.icon}</span>}
                      {opt.label}
                    </button>
                  ))}
                </>
              )}

              {staticOptions.length === 0 && dynamicOptions.length === 0 && (
                <div className="flex items-center justify-center w-full h-full py-10">
                  <p className="text-zinc-500 text-sm font-semibold">No results found 😮</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
