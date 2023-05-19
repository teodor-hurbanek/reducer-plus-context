import React from 'react'

type ButtonProps = {
  children: string | JSX.Element | JSX.Element[]
  disabled?: boolean
  onClick: () => void
}

export default function Button({ children, disabled, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className="btn">
      {children}
    </button>
  )
}
