import { ReactNode, useState, createContext, useEffect, useMemo } from 'react'

import { Country, DataContextValue, Data, IsLoading, IsError } from '../types'

export const DataContext = createContext<DataContextValue | null>(null)

type Props = {
  children: ReactNode
}

export function DataProvider({ children }: Props) {
  const [data, setData] = useState<Data>([])
  const [isLoading, setIsLoading] = useState<IsLoading>(true)
  const [isError, setIsError] = useState<IsError>(null)

  useEffect(() => {
    setData([])
    setIsLoading(true)
    setIsError(null)

    fetch(
      'https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags,cca3'
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(`Request failed with status ${res.status}`)
      })
      .then((json) => {
        setData(json.sort((a: Country, b: Country) => a.name.common.localeCompare(b.name.common)))
      })
      .catch((err) => setIsError(err))
      .finally(() => setIsLoading(false))
  }, [])

  const contextValue = useMemo(
    () => ({ data, setData, isLoading, setIsLoading, isError, setIsError }),
    [data, setData, isLoading, setIsLoading, isError, setIsError]
  )

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
}
