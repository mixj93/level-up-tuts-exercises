import styled from 'styled-components'
import { elevation, transition, colors } from 'utilities'

export const Card = styled.div`
  background-color: #fff;
  color: ${colors.black};
  border-radius: 5px;
  padding: 16px;
  ${elevation[4]};
  ${transition({ length: '0.5s', ease: 'ease-in' })};

  &:hover {
    ${elevation[5]};
  }
`
