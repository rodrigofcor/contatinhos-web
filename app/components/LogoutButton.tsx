'use client'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import Button from './Button'
import React from 'react'

export default function LogoutButton() {
	const router = useRouter()

	async function logout() {
		await signOut({
			redirect: false
		})

		router.replace('/')
	}

	return <Button className='bg-red-light dark:bg-purple rounded-lg w-72 p-2' onClick={logout}>Sair</Button>
}