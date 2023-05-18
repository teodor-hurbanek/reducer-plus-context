import React from 'react'
// types
import { Tip } from '@/types/general'
import TipListItem from './TipListItem'

type TipListProps = {
  tips: Tip[]
}

export default function TipList({ tips }: TipListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {tips.map(tip => (
        <TipListItem key={tip.id} tip={tip} />
      ))}
    </ul>
  )
}
