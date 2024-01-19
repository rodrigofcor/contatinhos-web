'use client'

import React, { useState } from 'react'
import { rancho } from '@/app/fonts'
import TextInput from '@/app/components/TextInput'
import Button from '@/app/components/Button'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Home() {
	const router = useRouter()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function login() {
		const result = await signIn('credentials', {
			email,
			password,
			redirect: false,
		})

		if (result?.error) {
			console.error(result)
			return
		}

		router.replace('test')
	}

	return (
		<main className="h-screen flex justify-center items-center">
			<div className='shadow-2xl bg-white dark:bg-brown-3 dark:text-white px-16 py-8 rounded-lg flex flex-col gap-8'>
				<h1 className={`${rancho.className} text-4xl`}>
          Novos contatinhos estão por vir!
				</h1>

				<TextInput placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />

				<TextInput type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />

				<div className='flex gap-5'>
					<Link className='w-full' href="/users/new">
						<Button className='bg-red-light dark:bg-purple rounded-lg w-full p-1.5'>Criar conta</Button>
					</Link>

					<Button className='bg-pink-4 dark:bg-red-dark rounded-lg w-full p-1.5' onClick={login}>
            Entrar
					</Button>
				</div>
			</div>
		</main>
	)
}
