
// import { useQuery, UseQueryOptions } from '@tanstack/react-query'
// import { componentService } from '@/services/componentService'
// import { Component } from '@/types/components'

// export const useComponents = () => {
//   return useQuery<Component[], Error>({
//     queryKey: ['components'],
//     queryFn: componentService,
//     staleTime: 1000 * 60 * 5,
//     cacheTime: 1000 * 60 * 30,
//     refetchOnWindowFocus: false,
//   } as UseQueryOptions<Component[], Error>)
// }


import { useQuery, useQueryClient, UseQueryOptions } from "@tanstack/react-query";
import { componentService } from "@/services/componentService";
import { Component } from "@/types/components";
import { QueryClient } from "@tanstack/react-query";

export const useComponents = () => {
  const queryClient = useQueryClient();

  const initialData = queryClient.getQueryData<Component[]>(["components"]);

  return useQuery<Component[], Error>({
    queryKey: ["components"],
    queryFn: componentService,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    initialData,
  } as UseQueryOptions<Component[], Error>);
};



export const prefetchComponents = (queryClient: QueryClient) => {
  return queryClient.prefetchQuery({
    queryKey: ["components"],
    queryFn: componentService,
    staleTime: 1000 * 60 * 5,
  });
};