import React from 'react'
// types
import { Tip } from '@/types/general'
import TipListItem from './TipListItem'
import { useTips } from './TipsContext'

// type TipListProps = {
//   tips: Tip[]
// }

export default function TipList() {
  const tips = useTips()

  if (!tips) return <p>There are no tips in the list.</p>

  return (
    <ul className="flex flex-col gap-3">
      {tips.map(tip => (
        <TipListItem key={tip.id} tip={tip} />
      ))}
    </ul>
  )
}
