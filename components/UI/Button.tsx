import React from 'react'

type ButtonProps = {
  children: string | JSX.Element
  disabled?: boolean
}

export default function Button({ children, disabled }: ButtonProps) {
  return (
    <button disabled={disabled} className="btn">
      {children}
    </button>
  )
}
