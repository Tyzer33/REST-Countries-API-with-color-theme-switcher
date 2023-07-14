export const baseTheme = {
  bgPrimary: 'hsl(0, 0%, 100%)',
  bgSecondary: 'hsl(0, 0%, 98%)',
  text: 'hsl(200, 15%, 8%)',
  inputColor: 'hsl(0, 0%, 52%)',
  flagsPlaceholder: 'hsla(0, 0%, 0%, 0.125)',
  headerShadow: '0 0 0.2rem 0.2rem hsla(0, 0%, 0%, 0.08)',
  shadow: '0 0 0.2rem 0.2rem hsla(0, 0%, 0%, 0.05)',
  iconFilled: false,
}

export const lightTheme = {
  ...baseTheme,
}

export const darkTheme = {
  ...baseTheme,
  bgPrimary: 'hsl(209, 23%, 22%)',
  bgSecondary: 'hsl(207, 26%, 17%)',
  text: 'hsl(0, 0%, 100%)',
  inputColor: 'hsl(0, 0%, 100%)',
  iconFilled: true,
}
