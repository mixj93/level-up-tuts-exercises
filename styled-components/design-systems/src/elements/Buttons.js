import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { elevation } from '../utilities'

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 1rem;
    padding: 3px 10px;
  `,
  cancel: ({ theme }) => `
    background-color: ${theme.colors.secondary};
  `
}

export const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  padding: 5px 20px;
  font-size: 2rem;
  transition: 0.3s ease box-shadow;
  ${elevation[1]};
  &:hover {
    ${elevation[2]};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`

export const CancelButton = styled(Button)`
  background-color: ${props => props.theme.colors.secondary};
`
