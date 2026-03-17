import { SignOutButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>Peer Review</h1>
      <SignOutButton />
    </div>
  )
}