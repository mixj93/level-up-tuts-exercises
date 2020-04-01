import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'

const Toggle = () => {
  const [items, setItems] = useState([
    { letter: 'L', key: 1 },
    { letter: 'i', key: 2 },
    { letter: 'o', key: 3 },
    { letter: 'o', key: 4 },
    { letter: 'o', key: 5 },
    { letter: 'n', key: 6 }
  ])
  // const [isToggled, setToggle] = useState(true)
  const transition = useTransition(items, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return (
    <div>
      {transition.map(({ item, key, props }) => (
        <animated.h1 key={key} style={props}>
          {item.letter}
        </animated.h1>
      ))}

      <button onClick={() => setItems([{ letter: 'L', key: 1 }])}>
        Toggle
      </button>
    </div>
  )
}

export default Toggle
