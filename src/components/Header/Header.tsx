import styled from 'styled-components'
import { StyledLink } from '../../styles/globalStyles'
import DarkButton from './DarkButton'
import { flex } from '../../styles/mixins'
import { breakpoints } from '../../styles/variables'

const StyledHeader = styled.header`
  ${flex('space-between', 'center')}
  background-color: ${({ theme }) => theme.bgPrimary};
  box-shadow: ${({ theme }) => theme.headerShadow};
  padding: 0 2rem;
  height: 10rem;

  @media ${breakpoints.desktop} {
    height: 5rem;
    padding: 0 5rem;
  }
`

const Title = styled.h1`
  font-size: 1.75rem;
  cursor: pointer;

  @media ${breakpoints.desktop} {
    font-size: 1.5rem;
  }
`

function Header() {
  return (
    <StyledHeader>
      <StyledLink to="/">
        <Title>Where in the world?</Title>
      </StyledLink>
      <DarkButton />
    </StyledHeader>
  )
}

export default Header
