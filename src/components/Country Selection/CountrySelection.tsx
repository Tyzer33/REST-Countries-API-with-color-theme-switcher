import styled from 'styled-components'
import Search from './Search'
import Categories from './Categories'
import CountriesList from './CountriesList'
import { SelectedRegionProvider } from '../../context/SelectedRegionContext'
import { SearchProvider } from '../../context/SearchContext'
import { breakpoints } from '../../styles/variables'
import { flex } from '../../styles/mixins'

const Main = styled.main`
  ${flex(null, null, 'column')}
  padding: 3rem 2rem;

  @media ${breakpoints.desktop} {
    padding: 3rem 5rem;
  }
`

const Filter = styled.div`
  ${flex('space-between', null)}

  flex-wrap: wrap;
  row-gap: 5rem;
  width: 100%;
  margin-bottom: 3rem;
`

function CountrySelection() {
  return (
    <SelectedRegionProvider>
      <SearchProvider>
        <Main>
          <Filter>
            <Search />
            <Categories />
          </Filter>
          <CountriesList />
        </Main>
      </SearchProvider>
    </SelectedRegionProvider>
  )
}

export default CountrySelection
