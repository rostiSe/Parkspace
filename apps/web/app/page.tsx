import { add } from '@parkspace/sample-lib'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World {add(1, 2)}
    </main>
  )
}
