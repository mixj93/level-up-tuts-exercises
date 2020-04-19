import React from 'react'
import { useHover } from '../hooks'
import { Card } from '../Elements'
import black from '../black.png'

const Hover = () => {
  const [isHovered, bind] = useHover()

  return (
    <div>
      <Card
        {...bind}
        style={{ background: isHovered ? 'var(--black)' : 'var(--purp)' }}
      >
        <h3>Some card</h3>
        <img src={black} alt="Some card" />
      </Card>
    </div>
  )
}

export default Hover
