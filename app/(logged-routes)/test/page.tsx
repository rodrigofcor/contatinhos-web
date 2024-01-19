import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import LogoutButton from '@/app/components/LogoutButton'
import { getServerSession } from 'next-auth'
import React from 'react'


export default async function Test() {
	const session = await getServerSession(nextAuthOptions)

	return (
		<div>
			{ session?.user.name }
			<LogoutButton></LogoutButton>
		</div>
	)
}
