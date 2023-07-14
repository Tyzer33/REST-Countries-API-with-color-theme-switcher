import styled from 'styled-components'
import BorderCountries from './BorderCountries'
import Informations from './Informations'
import { breakpoints } from '../../styles/variables'
import { Country } from '../../types'

const Container = styled.div`
  font-size: 1.7rem;
  width: 100%;

  @media ${breakpoints.desktop} {
    width: 37.5rem;
    font-size: initial;
  }
`

const Title = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 2.8rem;

  @media ${breakpoints.desktop} {
    font-size: 2rem;
    margin-bottom: 1.8rem;
  }
`

type Props = {
  country: Country
}

function InfosContainer({ country }: Props) {
  return (
    <Container>
      <Title>{country.name.common}</Title>
      <Informations country={country} />
      <BorderCountries country={country} />
    </Container>
  )
}

export default InfosContainer
