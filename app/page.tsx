import Image from 'next/image'
import { rancho } from '@/app/fonts'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-rancho">
      <div className={ `${rancho.className}` }>
        opa
      </div>
    </main>
  )
}
