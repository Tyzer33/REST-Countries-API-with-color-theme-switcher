import styled from 'styled-components'
import { StyledLink } from '../../styles/globalStyles'
import { Country } from '../../types'
import { breakpoints } from '../../styles/variables'
import { flex } from '../../styles/mixins'

const Container = styled.div`
  ${flex(null, null, 'column')}
  background: ${({ theme }) => theme.bgPrimary};
  height: 42rem;
  width: 33rem;
  border-radius: 0.6rem;
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media ${breakpoints.desktop} {
    height: 21rem;
    width: 16.5rem;
    border-radius: 0.5rem;
  }
`

const FlagContainer = styled.div`
  min-height: 20rem;
  background: ${({ theme }) => theme.flagsPlaceholder};

  @media ${breakpoints.desktop} {
    min-height: 10rem;
  }
`

const Flag = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: fill;

  /* for the alt text */
  ${flex()}
  color: white;
  font-weight: 600;
`

const Info = styled.div`
  ${flex('center', null, 'column')}
  margin: 0 3rem;
  height: 100%;

  @media ${breakpoints.desktop} {
    margin: 0 1.5rem;
  }
`

const ListItem = styled.li`
  font-size: 1.7rem;
  margin-bottom: 0.8rem;

  @media ${breakpoints.desktop} {
    font-size: 0.95rem;
    margin-bottom: 0.4rem;
  }
`

const Title = styled.h2`
  font-size: 2.225rem;
  margin-bottom: 2rem;

  /* in order, first, put text on one line, second, hide the text that exceeds, third, make '...' at the end  */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${breakpoints.desktop} {
    font-size: 1.2rem;
    margin-bottom: 1rem;

    &:hover {
      text-decoration-thickness: 0.1rem;
    }
  }
`

type Props = {
  country: Country
}

function CountryCard({ country }: Props) {
  const link = country.name.common.replaceAll(' ', '_')

  return (
    <StyledLink to={`/${link}`}>
      <Container>
        <FlagContainer>
          <Flag src={country.flags.svg} alt={`Flag of ${country.name.common}`} loading="lazy" />
        </FlagContainer>
        <Info>
          <Title title={country.name.common}>{country.name.common}</Title>
          <ul>
            <ListItem>
              <strong>Population:</strong> {country.population.toLocaleString('en-US')}
            </ListItem>
            <ListItem>
              <strong>Region:</strong> {country.region}
            </ListItem>
            <ListItem>
              <strong>Capital:</strong> {country.capital}
            </ListItem>
          </ul>
        </Info>
      </Container>
    </StyledLink>
  )
}

export default CountryCard
