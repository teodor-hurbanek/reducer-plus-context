import React from 'react'

type InputProps = {
  type: string
  placeholder: string
  className?: string
}

export default function Input({ type, placeholder, className }: InputProps) {
  return <input type={type} placeholder={placeholder} className={`input input-bordered ${className}`} />
}
