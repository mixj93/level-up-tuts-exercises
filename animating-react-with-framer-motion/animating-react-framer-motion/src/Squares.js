import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { shuffle } from 'lodash'

const COLORS = [
  'var(--red)',
  'var(--purp)',
  'var(--blue)',
  'var(--black)',
  'var(--green)'
]

const Squares = () => {
  const [colorsList, setColorsList] = useState(COLORS)

  return (
    <div>
      <button onClick={() => setColorsList(shuffle(colorsList))}>
        Shuffle
      </button>
      {colorsList.map((color) => (
        <motion.div
          key={color}
          positionTransition={{
            damping: 100,
            stiffness: 500
          }}
          style={{ background: color, height: 100, width: 100 }}
        />
      ))}
    </div>
  )
}

export default Squares
