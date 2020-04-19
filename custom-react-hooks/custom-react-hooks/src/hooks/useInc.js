import { useState } from 'react'

export const useInc = ({
  maxValue = 100,
  minValue = -100,
  initial = 0,
  step = 1,
}) => {
  const [value, setValue] = useState(initial)

  const inc = () => {
    setValue((prevState) =>
      prevState + step >= maxValue ? prevState : prevState + step
    )
  }

  const dec = () => {
    setValue((prevState) =>
      prevState - step <= minValue ? prevState : prevState - step
    )
  }

  const reset = () => setValue(initial)

  return [value, { inc, dec, reset }]
}
