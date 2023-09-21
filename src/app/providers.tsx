'use client';

import React from 'react';
import { ThemeProvider } from '~/app/components/providers';

export default function Providers(props: React.PropsWithChildren) {
	return <ThemeProvider defaultTheme='dark'>
		{props.children}
	</ThemeProvider>;
}