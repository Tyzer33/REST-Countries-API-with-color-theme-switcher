import { css } from 'styled-components'

type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit' | null
type Justify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial'
  | 'inherit'
  | null
type Align =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit'
  | null

// eslint-disable-next-line import/prefer-default-export
export const flex = (
  justify: Justify = 'center',
  align: Align = 'center',
  direction: Direction = null
) => css`
  display: flex;

  ${direction &&
  css`
    flex-direction: ${direction};
  `}

  ${justify &&
  css`
    justify-content: ${justify};
  `}

  ${align &&
  css`
    align-items: ${align};
  `}
`
