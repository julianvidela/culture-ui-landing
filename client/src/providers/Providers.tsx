"use client";

import { UIProvider } from "@/context/UIcontext";
import { ComponentProvider } from "@/context/ComponentContext";
import { LenisProvider } from "./additionalProviders/LenisProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UIProvider>
      <ComponentProvider>
        <LenisProvider>{children}</LenisProvider>
      </ComponentProvider>
    </UIProvider>
  );
}
