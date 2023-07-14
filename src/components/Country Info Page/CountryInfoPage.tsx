import { useContext, useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { DataContext } from '../../context/DataContext'
import BackButton from './BackButton'
import InfosContainer from './InfosContainer'
import Loading from '../Loading/Loading'
import { DataContextValue, Country } from '../../types'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { breakpoints } from '../../styles/variables'
import { flex } from '../../styles/mixins'

const Main = styled.main`
  ${flex('center', null, 'column')}
  position: relative;
  padding: 5rem 3.5rem;

  @media ${breakpoints.bigDesktop} {
    padding: 0;
  }
`

const Page = styled.div`
  ${flex(null, 'center', 'column')}
  gap: 5rem;

  @media ${breakpoints.bigDesktop} {
    ${flex('space-evenly', 'center', 'row')}
    gap: 2.5rem;
  }
`

const Flag = styled.img`
  display: block;
  max-width: 40rem;
  width: 100%;

  @media ${breakpoints.bigDesktop} {
    max-height: 25.0625rem;
    max-width: 35rem;
  }
`

function CountryInfoPage() {
  const location = useLocation()
  const [country, updateCountry] = useState<Country | null | undefined>(undefined)
  const { data, isError } = useContext(DataContext) as DataContextValue

  /* take the country name in url remove the '/' replace _ into space then decode URI into Char */
  const urlCountryURI = location.pathname.slice(1).replaceAll('_', ' ')
  const urlCountryChar = decodeURI(urlCountryURI).toLowerCase()

  useLayoutEffect(() => {
    const filteredData = data.filter((ctr) => ctr.name.common.toLowerCase() === urlCountryChar)

    if (filteredData.length > 0) {
      updateCountry(filteredData[0])
    } else if (data.length > 0) {
      updateCountry(null)
    }
  }, [data, location, urlCountryChar])

  if (isError) return <ErrorMessage message={isError.message} />

  if (country === null) {
    return <ErrorMessage message="We have no informations about this country 🙁" />
  }

  if (country === undefined) return <Loading />

  return (
    <Main>
      <BackButton />
      <Page>
        <Flag src={country.flags.svg} alt={country.flags.alt} />
        <InfosContainer country={country} />
      </Page>
    </Main>
  )
}

export default CountryInfoPage
