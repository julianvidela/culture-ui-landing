"use client";

import { useEffect, useState } from "react";
import { queryClient } from "@/lib/reactQueryClient";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";

export function ClientOnly({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  const [persister, setPersister] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);
    const localStoragePersister = createAsyncStoragePersister({
      storage: window.localStorage,
    });
    setPersister(localStoragePersister);
  }, []);

  if (!isClient || !persister) return null;

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      {children}
    </PersistQueryClientProvider>
  );
}