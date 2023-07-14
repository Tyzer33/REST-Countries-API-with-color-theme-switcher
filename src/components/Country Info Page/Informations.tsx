import styled from 'styled-components'
import { isStringArray, isObjectArray, isKeyOf } from '../../typeGuards'
import { Country, FormatableData, NestedObjectsKeys, NestedStringObject } from '../../types'
import { breakpoints } from '../../styles/variables'
import { flex } from '../../styles/mixins'

const Container = styled.div`
  ${flex(null, null, 'column')}
  gap: 5rem;

  @media ${breakpoints.desktop} {
    ${flex('space-between', null, 'row')}
    gap: 2rem;
  }
`

const List = styled.ul`
  ${flex(null, null, 'column')}
  row-gap: 1.75rem;

  @media ${breakpoints.desktop} {
    row-gap: 0.65rem;

    &:nth-child(2) {
      min-width: 15.5rem;
    }
  }
`

type Props = {
  country: Country
}

function Informations({ country }: Props) {
  function formatData<T extends NestedStringObject>(data: T, key: NestedObjectsKeys<T>): string
  function formatData(data: Exclude<FormatableData, NestedStringObject>, key?: null): string
  function formatData<T extends FormatableData>(
    data: T,
    key: NestedObjectsKeys<T> | null = null
  ): string {
    const dataValues = Object.values(data)

    if (typeof data === 'string') {
      return data
    }

    if (typeof data === 'number') {
      return data.toLocaleString('en-US')
    }

    if (Array.isArray(data)) {
      return data.join(', ')
    }

    if (isStringArray(dataValues)) {
      return dataValues.join(', ')
    }

    if (isObjectArray(dataValues) && isKeyOf(dataValues, key)) {
      return dataValues.map((val) => val[key]).join(', ')
    }

    return 'none'
  }

  return (
    <Container>
      <List>
        <li>
          <strong>Native Name:</strong> {formatData(country.name.nativeName, 'common')}
        </li>
        <li>
          <strong>Population:</strong> {formatData(country.population)}
        </li>
        <li>
          <strong>Region:</strong> {formatData(country.region)}
        </li>
        <li>
          <strong>Sub Region:</strong> {formatData(country.subregion)}
        </li>
        <li>
          <strong>Capital:</strong> {formatData(country.capital)}
        </li>
      </List>
      <List>
        <li>
          <strong>Top Level Domain:</strong> {formatData(country.tld)}
        </li>
        <li>
          <strong>Currencies:</strong> {formatData(country.currencies, 'name')}
        </li>
        <li>
          <strong>Languages:</strong> {formatData(country.languages)}
        </li>
      </List>
    </Container>
  )
}

export default Informations
