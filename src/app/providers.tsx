'use client';

import React from 'react';
import { IntlProvider, ThemeProvider } from '@components/providers';

export default function Providers(props: React.PropsWithChildren) {
	return <ThemeProvider defaultTheme='dark'>
		<IntlProvider>
			{props.children}
		</IntlProvider>
	</ThemeProvider>;
}