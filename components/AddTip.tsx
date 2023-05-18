import React from 'react'
// components
import InputGroup from './UI/InputGroup'
import Input from './UI/Input'
import Button from './UI/Button'

export default function AddTip() {
  return (
    <InputGroup>
      <div className="input-group">
        <Input type={'text'} placeholder={'Add travel tip...'} className="w-full sm:w-72" />
        <Button disabled={true}>Add</Button>
      </div>
    </InputGroup>
  )
}
