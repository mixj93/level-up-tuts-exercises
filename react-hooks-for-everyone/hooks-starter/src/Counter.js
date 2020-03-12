import React, { useReducer } from 'react'

const initialState = { count: 0 }

function reducer(state, action) {
  const value = action.value || 1
  switch (action.type) {
    case 'ADD':
      return {
        count: state.count + value
      }
    case 'MINUS':
      return {
        count: state.count - value
      }
    case 'RESET':
      return {
        count: initialState.count
      }
    default:
      throw new Error()
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: 'ADD' })}>+</button>
      <button onClick={() => dispatch({ type: 'ADD', value: 10 })}>+10</button>
      <button onClick={() => dispatch({ type: 'MINUS', value: 5 })}>-5</button>
      <button onClick={() => dispatch({ type: 'MINUS' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  )
}

export default Counter
