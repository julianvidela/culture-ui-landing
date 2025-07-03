
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { componentService } from '@/services/componentService'
import { Component } from '@/types/components'

export const useComponents = () => {
  return useQuery<Component[], Error>({
    queryKey: ['components'],
    queryFn: componentService,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  } as UseQueryOptions<Component[], Error>)
}
