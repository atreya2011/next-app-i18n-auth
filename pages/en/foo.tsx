import { useSession } from 'next-auth/react'

export default function foo() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <div>{session?.user?.name} EN</div>
  )
}
