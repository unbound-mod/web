'use client';

import AuthProvider from '$components/providers/auth-provider';
import { initReactI18next } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'next-themes';
import i18n from 'i18next';
import React from 'react';

i18n.use(initReactI18next);
i18n.init({
	supportedLngs: ['en'],
	resources: {
		en: {
			translation: {
				test: 'hello'
			}
		}
	},
	react: {

	}
});


export default function Providers(props: React.PropsWithChildren) {
	return <AuthProvider>
		<I18nextProvider i18n={i18n} defaultNS='translation'>
			<ThemeProvider disableTransitionOnChange defaultTheme='dark'>
				{props.children}
			</ThemeProvider>
		</I18nextProvider>
	</AuthProvider>;
}