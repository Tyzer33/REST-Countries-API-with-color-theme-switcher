import { useState } from 'react'
import styled from 'styled-components'
import ThemeIcon from './ThemeIcon'
import { flex } from '../../styles/mixins'
import { breakpoints } from '../../styles/variables'

const Button = styled.button`
  ${flex(null, 'center')}

  border: none;
  background: none;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.2rem;
  cursor: pointer;

  @media ${breakpoints.desktop} {
    font-size: 1rem;
  }
`

function DarkButton() {
  const [darkTheme, updateDarkTheme] = useState(false)

  function handleClick() {
    updateDarkTheme(!darkTheme)
    if (darkTheme) {
      document.documentElement.style.setProperty('--bg-primary', 'hsl(0, 0%, 100%)')
      document.documentElement.style.setProperty('--bg-secondary', 'hsl(0, 0%, 98%)')
      document.documentElement.style.setProperty('--text', 'hsl(200, 15%, 8%)')
      document.documentElement.style.setProperty('--input-color', 'hsl(0, 0%, 52%)')
    } else {
      document.documentElement.style.setProperty('--bg-primary', 'hsl(209, 23%, 22%)')
      document.documentElement.style.setProperty('--bg-secondary', 'hsl(207, 26%, 17%)')
      document.documentElement.style.setProperty('--text', 'hsl(0, 0%, 100%)')
      document.documentElement.style.setProperty('--input-color', 'hsl(0, 0%, 100%)')
    }
  }

  return (
    <Button onClick={() => handleClick()}>
      <ThemeIcon darkTheme={darkTheme} />
      Dark Mode
    </Button>
  )
}

export default DarkButton
