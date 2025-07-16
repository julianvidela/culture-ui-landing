// "use client";

// import { useEffect, useState } from "react";
// import { queryClient } from "@/lib/reactQueryClient";
// import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
// import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
// import { DevtoolsWrapper } from "@/components/DevtoolsWrapper/DevtoolsWrapper";

// export function ClientOnly({ children }: { children: React.ReactNode }) {
//   const [isClient, setIsClient] = useState(false);
//   const [persister, setPersister] = useState<any>(null);

//   useEffect(() => {
//     setIsClient(true);
//     const localStoragePersister = createAsyncStoragePersister({
//       storage: window.localStorage,
//     });
//     setPersister(localStoragePersister);
//   }, []);

//   if (!isClient || !persister) return null;

//   return (
//    <PersistQueryClientProvider
//   client={queryClient}
//   persistOptions={{ persister }}
// >
//   {children}
//   <DevtoolsWrapper />
// </PersistQueryClientProvider>
//   );
// }

'use client';

import React, { useEffect, useState } from 'react';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { getQueryClient } from '@/lib/reactQueryClient';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { DevtoolsWrapper } from '@/components/DevtoolsWrapper/DevtoolsWrapper';

export function ClientOnly({ children }: { children: React.ReactNode }) {
  const [persister, setPersister] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const p = createAsyncStoragePersister({
      storage: window.localStorage,
    });

    setPersister(p);
    setIsClient(true);
  }, []);

  if (!isClient || !persister) return null;

  return (
    <PersistQueryClientProvider
      client={getQueryClient()}
      persistOptions={{ persister }}
    >
      {children}
      <DevtoolsWrapper />
    </PersistQueryClientProvider>
  );
}
