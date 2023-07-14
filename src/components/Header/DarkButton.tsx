import { useContext } from 'react'
import styled from 'styled-components'
import ThemeIcon from './ThemeIcon'
import { flex } from '../../styles/mixins'
import { breakpoints } from '../../styles/variables'
import { CustomThemeContext } from '../../context/CustomThemeContext'
import { CustomThemeContextValue } from '../../types'

const Button = styled.button`
  ${flex(null, 'center')}
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.2rem;
  background: ${({ theme }) => theme.test};

  @media ${breakpoints.desktop} {
    font-size: 1rem;
  }
`

function DarkButton() {
  const { switchTheme } = useContext(CustomThemeContext) as CustomThemeContextValue

  return (
    <Button onClick={() => switchTheme()}>
      <ThemeIcon />
      Dark Mode
    </Button>
  )
}

export default DarkButton
