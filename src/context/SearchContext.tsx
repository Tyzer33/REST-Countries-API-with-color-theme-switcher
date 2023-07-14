import { useState, useMemo, createContext, ReactNode } from 'react'
import { SearchContextValue, Search } from '../types'

export const SearchContext = createContext<SearchContextValue | null>(null)

type Props = {
  children: ReactNode
}

export function SearchProvider({ children }: Props) {
  const [search, updateSearch] = useState<Search>('')

  const contextValue = useMemo(() => ({ search, updateSearch }), [search, updateSearch])

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>
}
