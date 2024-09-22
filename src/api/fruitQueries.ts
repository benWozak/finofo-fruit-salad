import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { FruitType, GroupType } from '../types/fruit'

/**
 * Using a proxy here due to CORS limitations - see vite.config.ts
 */
const fetchFromApi = async (endpoint: string) => {
  const response = await fetch(`/api${endpoint}`)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json()
}


/**************************************
 *                Fetch
 **************************************/

const fetchFruits = async (): Promise<FruitType[]> => {
  return fetchFromApi('/fruit/all')
}

const fetchFruitsByGroup = async (groupType: GroupType, groupName: string): Promise<FruitType[]> => {
  return fetchFromApi(`/${groupType}/${groupName}`)
}


/**************************************
 *                Hooks
 **************************************/

export const useAllFruits = (): UseQueryResult<FruitType[], Error> => {
  return useQuery({
    queryKey: ['fruits'],
    queryFn: fetchFruits,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 60 * 60 * 1000, // 1 hour
  })
}

export const useFruitsByGroup = (groupType: GroupType, groupName: string): UseQueryResult<FruitType[], Error> => {
  return useQuery({
    queryKey: ['fruits', groupType, groupName],
    queryFn: () => fetchFruitsByGroup(groupType, groupName),
    enabled: groupType !== 'none' || !groupName,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 60 * 60 * 1000, // 1 hour
  })
}
