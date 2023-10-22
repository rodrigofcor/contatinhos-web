'use client'

import React, { useState } from 'react'
import { rancho } from '@/app/fonts'
import TextInput from '@/app/components/TextInput'
import Button from '@/app/components/Button'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main className="h-screen flex justify-center items-center">
      <div className='bg-white dark:bg-brown-3 dark:text-white px-16 py-8 rounded-lg flex flex-col gap-8'>
        <h1 className={`${rancho.className} text-4xl`}>
          Novos contatinhos estão por vir!
        </h1>

        <TextInput placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />

        <TextInput type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />

        <div className='flex gap-5'>
          <Button className='bg-red-light dark:bg-purple rounded-lg w-full p-1.5'>
            Cria conta
          </Button>

          <Button className='bg-pink-4 dark:bg-red-dark rounded-lg w-full p-1.5'>
            Entrar
          </Button>
        </div>
      </div>
    </main>
  )
}
