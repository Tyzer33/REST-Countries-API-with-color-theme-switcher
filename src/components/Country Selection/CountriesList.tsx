import { useContext } from 'react'
import styled from 'styled-components'
import { SelectedRegionContext } from '../../context/SelectedRegionContext'
import { SearchContext } from '../../context/SearchContext'
import { DataContext } from '../../context/DataContext'
import CountryCard from './CountryCard'
import Loading from '../Loading/Loading'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { DataContextValue, SearchContextValue, SelectedRegionContextValue } from '../../types'
import { breakpoints } from '../../styles/variables'
import { flex } from '../../styles/mixins'

const Container = styled.div`
  ${flex('center', 'center', 'column')}
  gap: 5rem;
  position: relative;

  @media ${breakpoints.desktop} {
    display: grid;
    gap: 4.625rem;
    grid-template-rows: 21rem;
    grid-template-columns: repeat(auto-fill, 16.5rem);
  }
`

function CountriesList() {
  const { data, isLoading, isError } = useContext(DataContext) as DataContextValue
  const { selectedRegion } = useContext(SelectedRegionContext) as SelectedRegionContextValue
  const { search } = useContext(SearchContext) as SearchContextValue

  if (isError) {
    return <ErrorMessage message={isError.message} />
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      {data.map((country) => {
        if (![country.region, '', 'All'].includes(selectedRegion)) return ''
        const lowerCaseName = country.name.common.toLowerCase()
        const lowerCaseSearch = search.toLowerCase()

        if (!lowerCaseName.includes(lowerCaseSearch) && search !== '') return ''
        return <CountryCard country={country} key={country.cca3} />
      })}
    </Container>
  )
}

export default CountriesList
