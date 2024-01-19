import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { ubuntu } from '@/app/fonts'
import NextAuthSessionProvider from '@/providers/sessionProviders'

export const metadata: Metadata = {
	title: 'Contatinhos',
	description: 'A dating app',
}

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={ `${ubuntu.className}` }>
				<NextAuthSessionProvider>{children}</NextAuthSessionProvider>
			</body>
		</html>
	)
}
