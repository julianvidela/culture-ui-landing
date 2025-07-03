import { ClientOnly } from "@/helpers/ClientOnly";
import { UIProvider } from "@/context/UIcontext";
import { LenisProvider } from "./additionalProviders/LenisProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UIProvider>
      <ClientOnly>
        <LenisProvider>{children}</LenisProvider>
      </ClientOnly>
    </UIProvider>
  );
}