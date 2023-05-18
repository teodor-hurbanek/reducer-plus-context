'use client'

// hooks
import { useState } from 'react'
// components
import AddTip from '@/components/AddTip'
import TipList from '@/components/TipList'
// data
import initialTips from '@/data'

export default function Home() {
  const [tips, setTips] = useState(initialTips)

  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-2xl">Day in Prague</h1>

      <AddTip />

      <TipList tips={tips} />
    </section>
  )
}
