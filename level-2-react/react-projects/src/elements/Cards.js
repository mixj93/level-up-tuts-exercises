import styled from 'styled-components'
import { elevation, transition, colors } from 'utilities'

export const Card = styled.div`
  background-color: #fff;
  color: ${colors.black};
  border-radius: 5px;
  padding: 16px;
  max-width: 320px;
  margin: 0 auto;
  ${elevation[4]};
  ${transition({ property: 'box-shadow', length: '0.5s', ease: 'ease-in' })};

  &:hover {
    ${elevation[5]};
  }
`
