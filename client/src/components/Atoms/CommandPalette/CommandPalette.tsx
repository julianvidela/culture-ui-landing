"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { CommandPaletteModal } from "./components/CommandPaletteModal";
import { useCommandPaletteHotkey } from "@/hooks/useCommandPaletteHotkey";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useRouter } from "next/navigation";


interface Option {
  id: string;
  label: string;
  path?: string;
  targetId?: string;
}

interface Props {
  options: Option[];
}



export const CommandPalette: React.FC<Props> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const filtered = options.filter((opt) =>
    opt.label.toLowerCase().includes(query.toLowerCase())
  );
  const handleSelect = (option: Option) => {
    if (option.path) {
      router.push(option.path);
    } else if (option.targetId) {
      const el = document.getElementById(option.targetId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  
    setIsOpen(false);
    setQuery("");
  };
   
  useScrollLock(isOpen);

  useCommandPaletteHotkey({
    onToggle: () => setIsOpen((prev) => !prev),
  });

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-[#0A0A0A] text-white px-3 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 border border-zinc-700 shadow-md"
      >
        <Search size={20} />
        Search components
        <kbd className="ml-2 text-xs text-zinc-400">⌘K</kbd>
      </button>

      <CommandPaletteModal
        isOpen={isOpen}
        query={query}
        setQuery={setQuery}
        onClose={() => setIsOpen(false)}
        options={filtered}
         onSelect={handleSelect}
      />
    </>
  );
};
