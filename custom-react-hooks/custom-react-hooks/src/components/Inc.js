import React from 'react'
import { useInc } from '../hooks'

const Inc = () => {
  const [volume, { dec, inc, reset }] = useInc({
    maxValue: 10,
    minValue: 0,
  })

  return (
    <div>
      <button onClick={dec}>-</button>
      <span>{volume}</span>
      <button onClick={inc}>+</button>
      <button onClick={reset}>Reset Volume</button>
    </div>
  )
}

export default Inc
