'use client';

import AuthProvider from '$components/providers/auth-provider';
import { ThemeProvider } from 'next-themes';
import React from 'react';

export default function Providers(props: React.PropsWithChildren) {
	return <AuthProvider>
		<ThemeProvider disableTransitionOnChange defaultTheme='dark'>
			{props.children}
		</ThemeProvider>
	</AuthProvider>;
}