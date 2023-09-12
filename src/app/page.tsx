'use client'

import { Typewriter } from 'react-simple-typewriter'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Typewriter words={['Paulo', 'Turino', 'Paulo Turino']} loop={true} />
    </main>
  )
}
