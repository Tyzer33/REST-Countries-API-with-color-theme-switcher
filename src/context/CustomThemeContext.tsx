import { useState, useMemo, createContext, ReactNode, useCallback } from 'react'
import { ThemeProvider } from 'styled-components'
import { CustomThemeContextValue, Theme } from '../types'
import { lightTheme, darkTheme } from '../styles/themes'

export const CustomThemeContext = createContext<CustomThemeContextValue | null>(null)

type Props = {
  children: ReactNode
}

export function CustomThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>(lightTheme)

  const switchTheme = useCallback(() => {
    setTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme))
  }, [])

  const contextValue = useMemo(() => ({ switchTheme }), [switchTheme])

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  )
}
