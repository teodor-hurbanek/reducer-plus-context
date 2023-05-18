import React from 'react'
// components
import Button from './UI/Button'
// types
import { Tip } from '@/types/general'

type TipListItemProps = {
  tip: Tip
}

export default function TipListItem({ tip }: TipListItemProps) {
  return (
    <li className="flex items-center gap-3">
      <input checked={tip.done} type="checkbox" readOnly className="checkbox checkbox-info" />
      <p className="text-lg">{tip.text}</p>

      <div className="ml-auto flex gap-2">
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    </li>
  )
}
