'use client'

import { rancho } from '@/app/fonts'
import TextInput from '@/app/components/TextInput'

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className='bg-white dark:bg-brown dark:text-white px-16 py-8 rounded-lg'>
        <h1 className={ `${rancho.className} text-4xl`}>
          Novos contatinhos estão por vir!
        </h1>

        <TextInput placeholder='aaaa' value='' onChange={() => console.log('opa')} />
      </div>
    </main>
  )
}
