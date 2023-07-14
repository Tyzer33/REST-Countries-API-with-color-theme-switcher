import { Link } from 'react-router-dom'
import { createGlobalStyle, styled } from 'styled-components'
import { breakpoints } from './variables'

const GlobalStyle = createGlobalStyle`
  :root {
      --bg-primary: hsl(0, 0%, 100%);
      --bg-secondary: hsl(0, 0%, 98%);
      --text: hsl(200, 15%, 8%);
      --input-color: hsl(0, 0%, 52%);
      --flags-placeholder: hsla(0, 0%, 0%, 0.125);

      --header-shadow: 0 0 0.2rem 0.2rem hsla(0, 0%, 0%, 0.08);
      --shadow: 0 0 0.2rem 0.2rem hsla(0, 0%, 0%, 0.05);
  }

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    color: var(--text);
  }


  body {
    background: var(--bg-secondary);


    /* custom scrollbar */
    &::-webkit-scrollbar {
      width: 0.8vw;

      &-thumb {
        background: var(--input-color);
        border-radius: 1rem;
        cursor: pointer;
      }

      &-track {
        background-color: hsla(0, 0%, 35%, 0.2);
      }

      &-hover {
        transform: scale(1.05);
      }
    }
  }

  /* handle custom scrollbar for firefox */
  html {
    scrollbar-width: initial;
    scrollbar-color: var(--input-color) hsla(0, 0%, 35%, 0.2);
  }

  button {
    border: none;
    background: none;
  }

  strong {
    font-weight: 600;
  }

  @media ${breakpoints.desktop} {

    /* custom scrollbar */
    body::-webkit-scrollbar {
      width: 0.4vw;

      &-thumb {
        border-radius: 0.5rem;
      }

      &-hover {
        transform: scale(1.05);
      }
    }

    /* handle custom scrollbar for firefox */
    html {
      scrollbar-width: thin;
    }
  }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
  }

`

export default GlobalStyle

export const StyledLink = styled(Link)`
  text-decoration: none;
`
