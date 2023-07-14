import styled from 'styled-components'
import { flex } from '../../styles/mixins'
import { breakpoints } from '../../styles/variables'

const Button = styled.button`
  ${flex()}
  height: 4rem;
  width: 13rem;
  margin-bottom: 8rem;
  border-radius: 0.3rem;
  font-size: 1.75rem;
  background: ${({ theme }) => theme.bgPrimary};
  box-shadow: ${({ theme }) => theme.headerShadow};

  &:hover {
    transform: scale(0.95);
  }

  @media ${breakpoints.desktop} {
    height: 2.5rem;
    width: 8.5rem;
    padding-right: 0.25rem;
    border-radius: 0.4rem;
    font-size: initial;
  }

  @media ${breakpoints.bigDesktop} {
    margin: 5rem;
  }
`

const Svg = styled.svg`
  width: 1.75rem;
  fill: ${({ theme }) => theme.text};
  margin-right: 1.15rem;

  @media ${breakpoints.desktop} {
    width: 0.9rem;
    margin-right: 0.625rem;
  }
`

function BackButton() {
  return (
    <Button type="button" onClick={() => window.history.back()}>
      <Svg viewBox="0 0 20 20">
        <path d="M3.828 9l6.071-6.071-1.414-1.414-8.485 8.485 8.485 8.485 1.414-1.414-6.071-6.071h16.172v-2h-16.172z" />
      </Svg>
      Back
    </Button>
  )
}

export default BackButton
