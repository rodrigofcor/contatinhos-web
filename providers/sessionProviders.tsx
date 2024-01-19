'use client'

import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

interface NextAuthSessionProviderProps {
	children: ReactNode
}

export default function NextAuthSessionProvider({children}: NextAuthSessionProviderProps) {
	return <SessionProvider>{children}</SessionProvider>
}