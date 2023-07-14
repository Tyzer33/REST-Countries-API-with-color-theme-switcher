export type Country = {
  flags: CountryFlags
  name: CountryName
  tld: string[]
  cca3: string
  currencies: { [key: string]: CountryCurrency }
  capital: string[]
  region: Region
  subregion: string
  languages: { [key: string]: string }
  borders: string[]
  population: number
}

type CountryCurrency = {
  name: string
  symbol: string
}

type CountryFlags = {
  png: string
  svg: string
  alt: string
}

export type CountryName = {
  common: string
  official: string
  nativeName: { [key: string]: CountryNativeName }
}

type CountryNativeName = {
  official: string
  common: string
}

type Region = 'Asia' | 'Oceania' | 'Europe' | 'Americas' | 'Antarctic' | 'Africa'

export type Data = Country[]
export type IsLoading = boolean
export type IsError = Error | null

export type DataContextValue = {
  data: Data
  setData: React.Dispatch<React.SetStateAction<Data>>
  isLoading: IsLoading
  setIsLoading: React.Dispatch<React.SetStateAction<IsLoading>>
  isError: IsError
  setIsError: React.Dispatch<React.SetStateAction<IsError>>
}

export type Search = string

export type SearchContextValue = {
  search: Search
  updateSearch: React.Dispatch<React.SetStateAction<Search>>
}

export type SelectedRegion = string

export type SelectedRegionContextValue = {
  selectedRegion: SelectedRegion
  updateSelectedRegion: React.Dispatch<React.SetStateAction<SelectedRegion>>
}

export type StringObject = { [key: string]: string }

export type NestedStringObject = { [key: string]: StringObject }

export type FormatableData = string | number | string[] | NestedStringObject | StringObject

export type NestedObjectsKeys<T> = keyof T[keyof T]
