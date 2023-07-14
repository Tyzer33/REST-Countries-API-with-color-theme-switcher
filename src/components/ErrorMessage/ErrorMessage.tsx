import styled from 'styled-components'
import { flex } from '../../styles/mixins'

const Container = styled.div`
  ${flex()}
  font-size: 4rem;
  font-weight: 600;
  margin: 6rem 0;
  text-align: center;
`

type Props = {
  message?: string
}

function ErrorMessage({ message }: Props) {
  return <Container>🚨 {message} 🚨</Container>
}

export default ErrorMessage

ErrorMessage.defaultProps = {
  message: 'Sorry, an error occurred',
}
