import { getServerSession } from 'next-auth'
import { ReactNode } from 'react'
import { nextAuthOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import React from 'react'

interface PublicLayoutProps {
	children: ReactNode
}

export default async function PublicLayout({children}: PublicLayoutProps){
	const session = await getServerSession(nextAuthOptions)

	if (session) {
		redirect('/test')
	}

	return <>{children}</>
}