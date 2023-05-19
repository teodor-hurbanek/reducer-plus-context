import React, { useState } from 'react'
// hooks
import { useTipsDispatch } from './TipsContext'
// components
import Input from './UI/Input'
import Button from './UI/Button'
// types
import { Tip } from '@/types/general'

type TipListItemProps = {
  tip: Tip
}

export default function TipListItem({ tip }: TipListItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const dispatch = useTipsDispatch()

  const toggleEditing = () => {
    setIsEditing(!isEditing)
  }

  const handleTipTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch?.({
      type: 'changed',
      tip: {
        ...tip,
        text: e.target.value,
      },
    })
  }

  const handleTipDoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch?.({
      type: 'changed',
      tip: {
        ...tip,
        done: e.target.checked,
      },
    })
  }

  const handleTipDelete = () => {
    dispatch?.({
      type: 'deleted',
      id: tip.id,
    })
  }

  return (
    <li className="flex items-center gap-3">
      <input
        onChange={e => handleTipDoneChange(e)}
        checked={tip.done}
        type="checkbox"
        className="checkbox checkbox-info"
      />

      {!isEditing ? (
        <p className="text-lg">{tip.text}</p>
      ) : (
        <Input onChange={e => handleTipTextChange(e)} value={tip.text} type="text" />
      )}

      <div className="ml-auto flex gap-2">
        {!isEditing ? <Button onClick={toggleEditing}>Edit</Button> : <Button onClick={toggleEditing}>Save</Button>}
        <Button onClick={handleTipDelete}>Delete</Button>
      </div>
    </li>
  )
}
