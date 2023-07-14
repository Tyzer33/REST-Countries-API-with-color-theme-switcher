import React, { useContext } from 'react'
import styled from 'styled-components'
import SearchIcon from './SearchIcon'
import { SearchContext } from '../../context/SearchContext'
import { SearchContextValue } from '../../types'
import { breakpoints } from '../../styles/variables'
import { flex } from '../../styles/mixins'

const Container = styled.div`
  ${flex(null, 'center')}
  width: 100%;

  @media ${breakpoints.desktop} {
    width: auto;
  }
`

const Input = styled.input`
  border-radius: 0.6rem;
  box-shadow: ${({ theme }) => theme.shadow};
  height: 6rem;
  width: 100%;
  overflow: hidden;
  padding-left: 9.25rem;
  border: none;
  font-size: 1.55rem;
  background: ${({ theme }) => theme.bgPrimary};

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  @media ${breakpoints.desktop} {
    height: 3.5rem;
    border-radius: 0.3rem;
    width: 30rem;
    padding-left: 4.75rem;
    font-size: 0.9rem;
  }
`

function Search() {
  const { updateSearch } = useContext(SearchContext) as SearchContextValue

  return (
    <Container>
      <SearchIcon />
      <Input
        type="search"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateSearch(e.target.value)}
        placeholder="Search for a country..."
      />
    </Container>
  )
}

export default Search
