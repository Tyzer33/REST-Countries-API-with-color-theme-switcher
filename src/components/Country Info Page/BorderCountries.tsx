import { useContext } from 'react'
import styled from 'styled-components'
import { StyledLink } from '../../styles/globalStyles'
import { DataContext } from '../../context/DataContext'
import { Country, DataContextValue } from '../../types'
import { flex } from '../../styles/mixins'
import { breakpoints } from '../../styles/variables'

const Container = styled.div`
  ${flex(null, 'flex-start', 'column')}
  margin-top: 4.5rem;
  gap: 2rem;

  @media ${breakpoints.desktop} {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`

const ListTitle = styled.strong`
  white-space: nowrap;
  font-weight: 600;
`

const ListContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;

  @media ${breakpoints.desktop} {
    gap: 0.625rem;
  }
`

const ListItem = styled.button`
  ${flex()}
  background: ${({ theme }) => theme.bgPrimary};
  height: 3.5rem;
  min-width: 12rem;
  font-size: 1.4rem;
  border-radius: 0.25rem;
  padding: 0 1.25rem;
  box-shadow: ${({ theme }) => theme.shadow};
  cursor: pointer;

  &:hover {
    transform: scale(0.95);
  }

  @media ${breakpoints.desktop} {
    height: 1.75rem;
    min-width: 6rem;
    font-size: 0.85rem;
    border-radius: 0.25rem;
    padding: 0 0.75rem;
  }
`

type Props = {
  country: Country
}

function BorderCountries({ country }: Props) {
  const { data } = useContext(DataContext) as DataContextValue
  const borderCountries = data.filter((dataCountry) => country.borders.includes(dataCountry.cca3))

  return (
    <Container>
      <ListTitle>Border Countries:</ListTitle>
      <ListContainer>
        {borderCountries.length > 0 ? (
          borderCountries.map((borderCountry) => (
            <StyledLink to={`/${borderCountry.name.common}`} key={borderCountry.cca3}>
              <ListItem>{borderCountry.name.common}</ListItem>
            </StyledLink>
          ))
        ) : (
          <ListItem>none</ListItem>
        )}
      </ListContainer>
    </Container>
  )
}

export default BorderCountries
