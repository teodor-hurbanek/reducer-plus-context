import React, { useState } from 'react'
// components
import InputGroup from './UI/InputGroup'
import Input from './UI/Input'
import Button from './UI/Button'
// hooks
import { useTipsDispatch } from './TipsContext'

let nextId = 5

export default function AddTip() {
  const [text, setText] = useState('')
  const dispatch = useTipsDispatch()

  const handleTipAdd = () => {
    dispatch?.({
      type: 'added',
      id: nextId++,
      text,
    })
    setText('')
  }

  return (
    <InputGroup>
      <div className="input-group">
        <Input
          onChange={e => setText(e.target.value)}
          value={text}
          type={'text'}
          placeholder={'Add travel tip...'}
          className="w-full sm:w-72"
        />
        <Button onClick={handleTipAdd} disabled={!text}>
          Add
        </Button>
      </div>
    </InputGroup>
  )
}
