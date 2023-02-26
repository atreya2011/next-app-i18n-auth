'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'

export default function Counter({
  dictionary,
}: {
  dictionary: {
    increment: string
    decrement: string
  }
}) {
  const [count, setCount] = useState(0)
  const { data: session } = useSession()
  console.log(session)
  return (
    <p>
      <p>{session?.user?.name}</p>
      This compoment is rendered on client:{' '}
      <button onClick={() => setCount((n) => n - 1)}>
        {dictionary.decrement}
      </button>{' '}
      {count}{' '}
      <button onClick={() => setCount((n) => n + 1)}>
        {dictionary.increment}
      </button>
    </p>
  )
}
