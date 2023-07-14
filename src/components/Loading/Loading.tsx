import styled from 'styled-components'
import LoadingIcon from './LoadingIcon'
import { flex } from '../../styles/mixins'

const Container = styled.div`
  ${flex()}
  font-size: 5rem;
  font-weight: 600;
  margin: 3rem;
  gap: 1.5rem;
`

function Loading() {
  return (
    <Container>
      <LoadingIcon />
      Loading
    </Container>
  )
}

export default Loading
