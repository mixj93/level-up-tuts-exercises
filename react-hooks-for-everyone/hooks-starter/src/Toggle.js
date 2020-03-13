import React, { useState, useContext } from 'react'
import { UserContext } from './App'
import DishForm from './DishForm'

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false)
  const userContext = useContext(UserContext)
  if (!userContext.user) {
    return null
  }

  return (
    <div>
      {isToggled ? (
        <DishForm setToggle={setIsToggled} />
      ) : (
        <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      )}
    </div>
  )
}

export default Toggle
