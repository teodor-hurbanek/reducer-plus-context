import React from 'react'

type InputProps = {
  type: string
  placeholder?: string
  className?: string
  value: string
  onChange: (e: any) => void
}

export default function Input({ type, placeholder, className, value, onChange }: InputProps) {
  return (
    <input
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      value={value}
      className={`input input-bordered ${className}`}
    />
  )
}
