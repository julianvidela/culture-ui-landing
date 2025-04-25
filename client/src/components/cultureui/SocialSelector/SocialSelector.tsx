// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Github, Instagram, AtSign } from "lucide-react";
// import clsx from "clsx";

// const socials = [
//   { id: "github", icon: Github },
//   { id: "instagram", icon: Instagram },
//   { id: "x", icon: AtSign }, 
// ] ;

// type Social = (typeof socials)[number]["id"];
// type Variant = "default" | "colored";

// interface SocialSelectorProps {
//   onChange?: (selected: Social) => void;
//   className?: string;
//   variant?: Variant;
// }

// const socialStyles: Record<Social, { color: string; label: string }> = {
//   instagram: {
//     color: "bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600",
//     label: "Instagram",
//   },
//   x: {
//     color: "bg-black",
//     label: "X",
//   },
//   github: {
//     color: "bg-black",
//     label: "GitHub",
//   },
// };

// export const SocialSelector: React.FC<SocialSelectorProps> = ({
//   onChange,
//   className,
//   variant = "default",
// }) => {
//   const [selected, setSelected] = useState<Social>("instagram");

//   const handleSelect = (id: Social) => {
//     setSelected(id);
//     onChange?.(id);
//   };

//   return (
//     <div
//       className={clsx(
//         "flex gap-4 items-center justify-center relative",
//         className
//       )}
//     >
//       {socials.map(({ id, icon: Icon }) => {
//         const { color, label } = socialStyles[id];

//         return (
//             <div className="flex flex-col">

//           <div key={id} className="relative group">
//             <button
//               onClick={() => handleSelect(id)}
//               className="relative z-10 p-3 rounded-full text-white focus:outline-none"
//               aria-label={label}
//               >
//               {selected === id && (
//                   <motion.div
//                   layoutId="bg-circle"
//                   className={clsx(
//                       "absolute inset-0 rounded-full -z-10 border border-[var(--border-primary)]",
//                       variant === "colored" ? color : "bg-zinc-800"
//                     )}
//                     transition={{ type: "spring", stiffness: 400, damping: 30 }}
//                     />
//                 )}
//               <Icon
//                 size={24}
//                 strokeWidth={2}
//                 className={clsx(variant)}
//                 />
//             </button>


//             <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-zinc-800 text-white px-2 py-1 rounded-md pointer-events-none whitespace-nowrap shadow-md">
//               {label}
           
//               </div>
//           </div>
           
//         </div>
//         );
//       })}
//     </div>
//   );
// };



"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Instagram, AtSign } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

const socials = [
  { id: "github", icon: Github },
  { id: "instagram", icon: Instagram },
  { id: "x", icon: AtSign },
];

type Social = (typeof socials)[number]["id"];
type Variant = "default" | "colored";

interface SocialSelectorProps {
  onChange?: (selected: Social) => void;
  className?: string;
  variant?: Variant;
  iconSize?: number;
  iconPadding?: string;
  textColor?: string;
  activeBgColor?: string;
}

const socialStyles: Record<
  Social,
  {
    color: string;
    label: string;
    description: string;
    username: string;
  }
> = {
  instagram: {
    color: "bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600",
    label: "Instagram",
    description: "See moments on Instagram",
    username: "@julianui",
  },
  x: {
    color: "bg-black",
    label: "X",
    description: "Updates on x.com",
    username: "@julianx",
  },
  github: {
    color: "bg-black",
    label: "GitHub",
    description: "Codebase hosted on GitHub",
    username: "@julian-dev",
  },
};

export const SocialSelector: React.FC<SocialSelectorProps> = ({
  onChange,
  className,
  variant = "default",
  iconSize = 24,
  iconPadding = "p-3",
  textColor = "text-zinc-300",
  activeBgColor = "bg-zinc-800",
}) => {
  const [selected, setSelected] = useState<Social>("instagram");

  const handleSelect = (id: Social) => {
    setSelected(id);
    onChange?.(id);
  };

  const { label, description, username, color } = socialStyles[selected];

  return (
    <div className={clsx("flex flex-col items-center gap-4", className)}>
    
      <div className="flex gap-4 items-center justify-center relative">
        {socials.map(({ id, icon: Icon }) => {
          const isActive = selected === id;
          const style = socialStyles[id];

          return (
            <div key={id} className="flex flex-col items-center">
              <div className="relative group">
                <button
                  onClick={() => handleSelect(id)}
                  className={clsx(
                    "relative z-10 rounded-full focus:outline-none",
                    iconPadding
                  )}
                  aria-label={style.label}
                >
                  {isActive && (
                    <motion.div
                      layoutId="bg-circle"
                      className={clsx(
                        "absolute inset-0 rounded-full -z-10 border border-[var(--border-primary)]",
                        variant === "colored" ? style.color : activeBgColor
                      )}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon size={iconSize} strokeWidth={2} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Description + username */}
      <div className="flex flex-col items-center text-center">
        <p className="text-sm text-zinc-400">{description}</p>
        <Link href={""} className={clsx("text-base font-semibold", textColor)}>{username}</Link>
      </div>
    </div>
  );
};
