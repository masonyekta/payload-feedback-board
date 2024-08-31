import { Metadata } from 'next'
import { Space_Grotesk as FontSans } from 'next/font/google'
import React from 'react'

import { LayoutWrapper, ThemeProvider } from '@/components/layout'
import { Toaster } from '@/components/ui/toaster'

import { cn } from '@/lib/utils'

import siteMetadata from '@/data/siteMetadata'
import '@/styles/globals.css'

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-main',
})

export const metadata: Metadata = {
	title: {
		default: siteMetadata.SEO.title,
		template: `%s - ${siteMetadata.SEO.title}`,
	},
	description: siteMetadata.SEO.description,
	openGraph: {
		title: siteMetadata.SEO.title,
		description: siteMetadata.SEO.description,
		siteName: siteMetadata.SEO.title,
		url: siteMetadata.siteURL,
		images: [
			{
				url: `${siteMetadata.siteURL}/og.jpg`,
				width: 1200,
				height: 630,
			},
		],
		locale: 'en_US',
		type: 'website',
	},
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className={cn('font-sans antialiased', fontSans.variable, 'dark:bg-neutral-950')}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<LayoutWrapper>{children}</LayoutWrapper>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}

export default Layout
