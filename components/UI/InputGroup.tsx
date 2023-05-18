import React from 'react'

type GroupProps = {
  children: JSX.Element | JSX.Element[]
}

export default function InputGroup({ children }: GroupProps) {
  return <div className="form-control">{children}</div>
}
