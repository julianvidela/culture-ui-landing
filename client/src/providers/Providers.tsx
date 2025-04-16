"use client";

import { ComponentProvider } from "@/context/ComponentContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ComponentProvider>{children}</ComponentProvider>;
}
