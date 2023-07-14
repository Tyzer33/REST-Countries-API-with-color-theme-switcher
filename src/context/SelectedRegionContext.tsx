import { useState, useMemo, createContext, ReactNode } from 'react'
import { SelectedRegionContextValue, SelectedRegion } from '../types'

export const SelectedRegionContext = createContext<SelectedRegionContextValue | null>(null)

type Props = {
  children: ReactNode
}

export function SelectedRegionProvider({ children }: Props) {
  const [selectedRegion, updateSelectedRegion] = useState<SelectedRegion>('')

  const contextValue = useMemo(
    () => ({ selectedRegion, updateSelectedRegion }),
    [selectedRegion, updateSelectedRegion]
  )

  return (
    <SelectedRegionContext.Provider value={contextValue}>{children}</SelectedRegionContext.Provider>
  )
}
