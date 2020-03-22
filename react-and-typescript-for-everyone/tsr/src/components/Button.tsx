import React from 'react'

type Props = {
  // onClick: (e: React.MouseEvent) => string // Basic Mouse Event
  // onChange?: (e: React.FormEvent<HTMLInputElement>) => string // Basic Input Event
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => string // Button Click
}

export const Button: React.FC<Props> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>
}
