import React, { useState, useContext } from 'react'
import { UserContext } from './App'

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false)
  const userContext = useContext(UserContext)
  if (!userContext.user) {
    return null
  }

  return (
    <div>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      {isToggled && <h2>Hello!</h2>}
    </div>
  )
}

export default Toggle
