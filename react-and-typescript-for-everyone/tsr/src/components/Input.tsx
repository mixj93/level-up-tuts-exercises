import React, { useState, useRef } from 'react'

export const Input = () => {
  const [name, setName] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null!) // Readonly
  if (ref && ref.current) {
    console.log(ref.current.value)
  }

  return (
    <input
      type="text"
      ref={ref}
      value={name}
      onChange={e => setName(e.target.value)}
    />
  )
}
