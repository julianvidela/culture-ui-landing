"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../Atoms/Button/Button";
import { navLinks } from "./DataLinks";
import { usePathname } from "next/navigation";
import LogoCulture from "@/common/assets/icons/LogoCulture";
import SidebarContent from "../Sidebar/components/SideBarContent";
import { CommandPaletteWrapper } from "../Atoms/CommandPalette/components/CommandPaletteWrapper";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useQueryClient } from "@tanstack/react-query";
import { prefetchComponents } from "@/hooks/useComponents";
import Img from "@/common/assets/img";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const queryClient = useQueryClient();

  const handlePrefetch = () => {
    prefetchComponents(queryClient);
  };

  useScrollLock(isMenuOpen);

  return (
    <div className="bg-[#0a0a0a] border border-[var(--border-primary)] w-full rounded-lg h-auto z-40 relative my-5 p-1">
      <div className=" bg-[#4141415b] w-full h-full rounded-md">
        <nav className="flex justify-between items-center w-full py-4 px-5">
          <div className="flex gap-14">
            <div className="flex items-center justify-center">
              <img src={Img.CultureLog} alt="logo culture" />
            </div>
            <div className="hidden lg:flex items-center gap-4">
              {navLinks.map((link, index) => (
                <Link
                  onMouseEnter={() => {
                    if (link.href === "/docs") handlePrefetch();
                  }}
                  key={index}
                  href={link.href}
                  className="font-semibold text-sm text-[var(--text-color-secondary)] transition-colors duration-300 ease-in-out hover:text-[var(--text-color-primary)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex">
            <CommandPaletteWrapper />
          </div>

          <Button
            onClick={() => setIsMenuOpen(true)}
            backgroundColor="transparent"
            className="lg:hidden flex items-center text-[var(--text-color-secondary)]"
          >
            <AlignJustify stroke="white" />
          </Button>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setIsMenuOpen(false)}
              />

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
    </div>
  );
};
