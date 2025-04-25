"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

interface NavItem {
  id: string;
  icon: React.ReactNode;
  href: string;
}

interface FloatingNavBarProps {
  items: NavItem[];
  bgColor?: string;
  indicatorColor?: string;
  iconColor?: string;
  activeIconColor?: string;
  iconSize?: number;
  iconStroke?:number;
  iconPadding?: string;
  className?: string;
}

export const FloatingNavBar: React.FC<FloatingNavBarProps> = ({
  items,
  bgColor = "#0A0A0A",
  indicatorColor = "#ffffff",
  iconColor = "#999",
  activeIconColor = "#fff",
  iconSize = 18,
  iconStroke = 1,
  iconPadding = "p-3",
  className,
}) => {
  const [active, setActive] = useState<string>(items[0]?.id || "");

  return (
    <div
      className={clsx(
        "flex gap-6 px-3 py-3 rounded-full shadow-xl backdrop-blur-md relative",
        "border border-[var(--border-primary)]",
        className
      )}
      style={{ backgroundColor: bgColor }}
    >
      {/* Items */}
      {items.map((item) => {
        const isActive = active === item.id;

        return (
          <Link key={item.id} href={item.href} scroll={false}>
            <button
              onClick={() => setActive(item.id)}
              className={clsx(
                "relative z-10 flex items-center justify-center",
                iconPadding
              )}
            >
              {/* Indicador animado */}
              {isActive && (
                <motion.div
                  layoutId="indicator"
                  className={clsx(
                    "absolute inset-0 rounded-full -z-10 border border-[var(--border-primary)]"
                  )}
                  style={{ backgroundColor: indicatorColor }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
               <span
                className="transition-colors duration-300"
                style={{
                  color: active === item.id ? activeIconColor : iconColor,
                }}
              >
                {item.icon}
              </span>
            </button>
          </Link>
        );
      })}
    </div>
  );
};