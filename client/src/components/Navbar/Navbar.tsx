// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import { AlignJustify, LogOut } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "../Atoms/Button/Button";
// import { navLinks } from "./DataLinks";
// import { usePathname } from "next/navigation";
// import LogoCulture from "@/common/assets/icons/LogoCulture";
// import { useAuth } from "@/hooks/useAuth";
// import Img from "@/common/assets/img";
// import SidebarContent from "../Sidebar/components/SideBarContent";

// const LOGIN_URL = "https://c23-53-webapp.onrender.com/api/v1/auth/login";

// export const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { accessToken, logout, user } = useAuth();
//   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
//   const userMenuRef = useRef<HTMLDivElement>(null);
//   const pathname = usePathname();

//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isMenuOpen]);

//   return (
//     <div className="border-b border-[var(--border-primary)] w-full h-auto z-50 relative">
//       <nav className="flex justify-between items-center w-full py-6">
//         {/* Logo + links */}
//         <div className="flex gap-14">
//           <div className="flex items-center gap-3 text-[var(--text-color-secondary)] font-bold text-[24px]">
//             <LogoCulture />
//             <h2>Culture UI</h2>
//           </div>
//           <div className="hidden lg:flex items-center gap-6 text-[14px]">
//             {navLinks.map((link, index) => (
//               <Link
//                 key={index}
//                 href={link.href}
//                 className="font-semibold text-[var(--text-color-secondary)] transition-colors duration-300 ease-in-out hover:text-[var(--text-color-primary)]"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Auth (desktop) */}
//         <div className="hidden lg:flex">
//           {!accessToken ? (
//             <Button
//               onClick={() => (window.location.href = LOGIN_URL)}
//               backgroundColor="white"
//               fontSize="15px"
//             >
//               Log in
//             </Button>
//           ) : (
//             accessToken &&
//             user && (
//               <div className="relative" ref={userMenuRef}>
//                 <button
//                   onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
//                   className="flex items-center gap-2 group"
//                 >
//                   <img
//                     src={Img.Perro}
//                     alt="User profile"
//                     className="w-8 h-8 rounded-full object-cover border-2  border-b-blue-200 transition-transform duration-200 group-hover:scale-105"
//                   />
//                 </button>

//                 {isUserMenuOpen && (
//                   <div className="absolute right-0 top-12 bg-[#0A0A0A] border border-[var(--border-primary)] rounded-lg shadow-xl w-[256px] p-2 animate-slide-down">
//                     <div className="flex flex-col gap-1 w-full">
//                       <div className="flex items-center py-3 px-2 gap-3">
//                         <img
//                           src={Img.Perro}
//                           alt="User profile"
//                           className="w-7 h-7 rounded-full object-cover border"
//                         />
//                         <div className="flex flex-col">
//                           <p className="font-semibold text-[14px] text-[var(--text-color-secondary)] truncate">
//                             {user.name}
//                           </p>
//                           <p className="text-[14px] font-semibold text-[var(--text-color-primary)] truncate">
//                             {user.email}
//                           </p>
//                         </div>
//                       </div>
//                       <div className="w-full flex flex-col border-y border-[var(--border-primary)] mt-2 py-2 gap-1">
//                         {navLinks.map((link, index) => (
//                           <Link
//                             key={index}
//                             href={link.href}
//                             className="font-semibold text-[14px] text-[var(--text-color-primary)] transition-colors duration-300 ease-in-out hover:text-[var(--text-color-secondary)]"
//                           >
//                             <div className="hover:bg-[#ffffff0f] py-2 px-2 rounded-md">
//                               {link.label}
//                             </div>
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="mt-1 flex items-center">
//                       <div className="hover:bg-[#ffffff0f] rounded-md py-2 px-2 w-full">
//                         <button
//                           onClick={logout}
//                           className="flex justify-between items-center w-full font-semibold text-[14px] text-[var(--text-color-primary)] transition-colors duration-300 ease-in-out hover:text-[var(--text-color-secondary)]"
//                         >
//                           Log out
//                           <LogOut stroke="#b8b4b4" width={16} height={16} />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )
//           )}
//         </div>

//         {/* Burger button */}
//         <Button
//           onClick={() => setIsMenuOpen(true)}
//           backgroundColor="transparent"
//           className="lg:hidden flex items-center text-[var(--text-color-secondary)]"
//         >
//           <AlignJustify stroke="white" />
//         </Button>
//       </nav>

//       {/* Mobile drawer menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               key="backdrop"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.6 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 bg-black z-40"
//               onClick={() => setIsMenuOpen(false)}
//             />

//             {/* Drawer */}
//             <motion.div
//               key="mobile-menu"
//               initial={{ y: "100%", opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: "100%", opacity: 0 }}
//               transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
//               className="fixed inset-x-0 bottom-0 px-4 z-50"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               <div
//                 className="bg-[#0a0a0a] h-[75vh] overflow-y-auto scroll-smooth scrollbar-hidden  border-[var(--border-primary)]  border rounded-t-2xl bottom-0 p-4 shadow-xl  mx-auto w-full flex flex-col gap-3"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {user && (
//                   <div className="flex items-center justify-between border-b border-[var(--border-primary)]  px-2 pb-5 gap-3 mb-4">
//                     <div className="flex flex-col">
//                       <p className="font-semibold text-[14px] text-[var(--text-color-secondary)] truncate">
//                         {user.name}
//                       </p>
//                       <p className="text-[14px] font-semibold text-[var(--text-color-primary)] truncate">
//                         {user.email}
//                       </p>
//                     </div>
//                     <img
//                       src={Img.Perro}
//                       alt="User profile"
//                       className="w-6 h-6 rounded-full object-cover border"
//                     />
//                   </div>
//                 )}

//                 <ul className="flex flex-col gap-2 list-none p-0 m-0">
//                   {navLinks.map((link, index) => {
//                     const isActive = pathname === link.href;

//                     return (
//                       <li key={index}>
//                         <Link
//                           href={link.href}
//                           onClick={() => setIsMenuOpen(false)}
//                           className={`block font-semibold text-[14px] py-2 px-4 rounded-md transition-colors duration-300 ease-in-out
//           ${
//             isActive
//               ? "text-[var(--text-color-secondary)]"
//               : "text-[var(--text-color-primary)] hover:text-[var(--text-color-secondary)]"
//           }`}
//                         >
//                           {link.label}
//                         </Link>
//                       </li>
//                     );
//                   })}
//                 </ul>
//                 <div className="my-2">
//                   <SidebarContent onLinkClick={() => setIsMenuOpen(false)} />
//                 </div>

//                 {!accessToken ? (
//                   <Button
//                     backgroundColor="white"
//                     onClick={() => (window.location.href = LOGIN_URL)}
//                     textColor="#000000"
//                     fontSize="15px"
//                   >
//                     Log in
//                   </Button>
//                 ) : (
//                   <div className="my-3 flex items-center">
//                     <div className="bg-white rounded-md py-2 px-2 w-full">
//                       <button
//                         onClick={logout}
//                         className="flex justify-between items-center w-full font-semibold text-[14px] text-black"
//                       >
//                         Log out
//                         <LogOut stroke="black" width={16} height={16} />
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };



"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../Atoms/Button/Button";
import { navLinks } from "./DataLinks";
import { usePathname } from "next/navigation";
import LogoCulture from "@/common/assets/icons/LogoCulture";
import Img from "@/common/assets/img";
import SidebarContent from "../Sidebar/components/SideBarContent";
import { CommandPalette } from "@/components/Atoms/CommandPalette/CommandPalette";
import { CommandPaletteWrapper } from "../Atoms/CommandPalette/CommandPaletteWrapper";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="border-b border-[var(--border-primary)] w-full h-auto z-50 relative">
      <nav className="flex justify-between items-center w-full py-6">
        {/* Logo + links */}
        <div className="flex gap-14">
          <div className="flex items-center gap-3 text-[var(--text-color-secondary)] font-bold text-[24px]">
            <LogoCulture />
            <h2>Culture UI</h2>
          </div>
          <div className="hidden lg:flex items-center gap-6 text-[14px]">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="font-semibold text-[var(--text-color-secondary)] transition-colors duration-300 ease-in-out hover:text-[var(--text-color-primary)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Command Palette (desktop) */}
        <div className="hidden lg:flex">
          <CommandPaletteWrapper />
        </div>

        {/* Burger button */}
        <Button
          onClick={() => setIsMenuOpen(true)}
          backgroundColor="transparent"
          className="lg:hidden flex items-center text-[var(--text-color-secondary)]"
        >
          <AlignJustify stroke="white" />
        </Button>
      </nav>

      {/* Mobile drawer menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="mobile-menu"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed inset-x-0 bottom-0 px-4 z-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <div
                className="bg-[#0a0a0a] h-[65vh] overflow-y-auto scroll-smooth scrollbar-hidden border-[var(--border-primary)] border rounded-t-2xl bottom-0 p-4 shadow-xl mx-auto w-full flex flex-col gap-3"
                onClick={(e) => e.stopPropagation()}
              >
                <ul className="flex flex-col gap-2 list-none p-0 m-0">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <li key={index}>
                        <Link
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block font-semibold text-[14px] py-2 px-2 rounded-md transition-colors duration-300 ease-in-out ${
                            isActive
                              ? "text-[var(--text-color-secondary)]"
                              : "text-[var(--text-color-primary)] hover:text-[var(--text-color-secondary)]"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="my-2">
                  <SidebarContent onLinkClick={() => setIsMenuOpen(false)} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
