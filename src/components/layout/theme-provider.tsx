'use client'

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes'
import * as React from 'react'

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
