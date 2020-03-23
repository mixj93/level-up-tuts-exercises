import React, { useRef, useContext } from 'react'
import styled from 'styled-components'
import { useClickOutside } from './useClickOutside'
import { GlobalContext } from './GlobalState'

export const ReducerButton = () => {
  const ref = useRef<HTMLDivElement>(null!)
  useClickOutside(ref, () => {
    console.log('click outside')
  })

  const { rValue, turnOn, turnOff } = useContext(GlobalContext)

  return (
    <Wrapper ref={ref}>
      {rValue && <p>rValue is true</p>}
      <button onClick={turnOn}>Action One</button>
      <button onClick={turnOff}>Action Two</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: pink;
`
