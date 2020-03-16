import { css } from 'styled-components'

export const fixed = ({
  xProp = 'left',
  yProp = 'top',
  x = 0,
  y = 0
} = {}) => css`
  position: fixed;
  ${xProp}: ${x};
  ${yProp}: ${y};
`

export const absolute = ({
  xProp = 'left',
  yProp = 'top',
  x = 0,
  y = 0
} = {}) => css`
  position: absolute;
  ${xProp}: ${x};
  ${yProp}: ${y};
`
