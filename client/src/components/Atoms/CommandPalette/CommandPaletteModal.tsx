import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { useRef, useEffect } from "react";

interface Option {
  id: string;
  label: string;
  path?: string;
  targetId?: string;
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
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm flex justify-center items-center"
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-[#0A0A0A] border border-zinc-700 rounded-xl w-[450px] h-auto z-50 pb-1 overflow-hidden scrollbar-shadcn"
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

            <div className="max-h-64 overflow-y-auto flex flex-col gap-2 px-1 py-1 ">
              {options.length > 0 ? (
                options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => onSelect(opt)}
                    className="text-left w-full px-3 py-3 text-sm font-semibold rounded-md text-zinc-300 hover:bg-zinc-800 transition-colors"
                  >
                    {opt.label}
                  </button>
                ))
              ) : (
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
