


// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Github, Instagram, AtSign } from "lucide-react";
// import clsx from "clsx";
// import Link from "next/link";

// const socials = [
//   { id: "github", icon: Github },
//   { id: "instagram", icon: Instagram },
//   { id: "x", icon: AtSign },
// ];

// type Social = (typeof socials)[number]["id"];
// type Variant = "default" | "colored";

// interface SocialSelectorProps {
//   onChange?: (selected: Social) => void;
//   className?: string;
//   variant?: Variant;
//   iconSize?: number;
//   iconPadding?: string;
//   textColor?: string;
//   activeBgColor?: string;
// }

// const socialStyles: Record<
//   Social,
//   {
//     color: string;
//     label: string;
//     description: string;
//     username: string;
//   }
// > = {
//   instagram: {
//     color: "bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600",
//     label: "Instagram",
//     description: "See moments on Instagram",
//     username: "@julianui",
//   },
//   x: {
//     color: "bg-black",
//     label: "X",
//     description: "Updates on x.com",
//     username: "@julianx",
//   },
//   github: {
//     color: "bg-black",
//     label: "GitHub",
//     description: "Codebase hosted on GitHub",
//     username: "@julian-dev",
//   },
// };

// export const SocialSelector: React.FC<SocialSelectorProps> = ({
//   onChange,
//   className,
//   variant = "default",
//   iconSize = 24,
//   iconPadding = "p-3",
//   textColor = "text-zinc-300",
//   activeBgColor = "bg-zinc-800",
// }) => {
//   const [selected, setSelected] = useState<Social>("instagram");

//   const handleSelect = (id: Social) => {
//     setSelected(id);
//     onChange?.(id);
//   };

//   const { label, description, username, color } = socialStyles[selected];

//   return (
//     <div className={clsx("flex flex-col items-center gap-4", className)}>
    
//       <div className="flex gap-4 items-center justify-center relative">
//         {socials.map(({ id, icon: Icon }) => {
//           const isActive = selected === id;
//           const style = socialStyles[id];

//           return (
//             <div key={id} className="flex flex-col items-center">
//               <div className="relative group">
//                 <button
//                   onClick={() => handleSelect(id)}
//                   className={clsx(
//                     "relative z-10 rounded-full focus:outline-none",
//                     iconPadding
//                   )}
//                   aria-label={style.label}
//                 >
//                   {isActive && (
//                     <motion.div
//                       layoutId="bg-circle"
//                       className={clsx(
//                         "absolute inset-0 rounded-full -z-10 border border-[var(--border-primary)]",
//                         variant === "colored" ? style.color : activeBgColor
//                       )}
//                       transition={{ type: "spring", stiffness: 400, damping: 30 }}
//                     />
//                   )}
//                   <Icon size={iconSize} strokeWidth={2} />
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>

     
//       <div className="flex flex-col items-center text-center">
//         <p className="text-sm text-zinc-400">{description}</p>
//         <Link href={""} className={clsx("text-base font-semibold", textColor)}>{username}</Link>
//       </div>
//     </div>
//   );
// };



"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";


interface SocialItem {
  id: string;
  icon: React.ReactNode;
  label?: string;
  username?: string;
  description?: string;
  href: string;
  color?: string; // tailwind o bg custom
}

interface SocialSelectorProps {
  items: SocialItem[];
  onChange?: (selected: string) => void;
  className?: string;
  variant?: "default" | "colored";
  iconSize?: number;
  iconPadding?: string;
  textColor?: string;
  activeBgColor?: string;
  border?: boolean;
}

export const SocialSelector: React.FC<SocialSelectorProps> = ({
  items,
  onChange,
  className,
  variant = "default",
  iconSize = 24,
  iconPadding = "p-3",
  textColor = "text-zinc-300",
  activeBgColor = "bg-zinc-800",
  border = false,
}) => {
  const [selected, setSelected] = useState<string>(items[0]?.id || "");

  const handleSelect = (id: string) => {
    setSelected(id);
    onChange?.(id);
  };

  const selectedItem = items.find((item) => item.id === selected);
  if (!selectedItem) return null;

  return (
    <div className={clsx("flex flex-col items-center gap-4", className)}>
      {/* Icons */}
      <div className="flex gap-4 items-center justify-center relative">
        {items.map(({ id, icon, color }) => {
          const isActive = selected === id;
          return (
            <div key={id} className="flex flex-col items-center">
              <div className="relative group">
                <button
                  onClick={() => handleSelect(id)}
                  className={clsx("relative z-10 rounded-full focus:outline-none", iconPadding )}
                  aria-label={id}
                >
                  {isActive && (
                    <motion.div
                      layoutId="bg-circle"
                      className={clsx(
                        "absolute inset-0 rounded-full -z-10 border border-[var(--border-primary)]",
                        variant === "colored" ? color : activeBgColor,
                        border ? "border-[var(--border-primary)]" : ""

                      )}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="text-white">{icon}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-sm text-[var(--text-color-primary)]">{selectedItem.description}</p>
        <Link
          href={selectedItem.href}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx("text-base text-[var(--text-color-secondary)] font-semibold", textColor)}
        >
          {selectedItem.username}
        </Link>
      </div>
    </div>
  );
};

