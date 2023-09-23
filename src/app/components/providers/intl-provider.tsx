'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import IntlMessageFormat from 'intl-messageformat';
import Locales from '~/../i18n';
import { z } from 'zod';

type IntlProviderProps = {
	children: React.ReactNode;
	defaultLocale?: string;
	storageKey?: string;
};

type IntlProviderState = {
	locale: string;
	setLocale: (locale: string) => void;
};

const initial = {
	locale: 'en-US',
	setLocale: () => null
};

// const MISC_REGEX = /[~*_]{2}.+?[~*_]{2}|\[.*?\]\(.+?\)|\n\n/;
const PARAMETERS_REGEX = /\{.+?\}/;

const IntlProviderContext = createContext<IntlProviderState>(initial);

function IntlProvider({ children, defaultLocale = 'en-US', storageKey = 'locale', ...props }: IntlProviderProps) {
	const persisted = localStorage.getItem(storageKey) || (navigator as any).locale;
	const [locale, setLocale] = useState(() => persisted && Locales[persisted as keyof typeof Locales] ? persisted : defaultLocale);

	console.log(locale);

	const updateLocale = useCallback(() => {
		const root = window.document.documentElement;
		root.setAttribute('data-locale', locale);

		type Keys = keyof typeof IntlProvider.defaultMessages | keyof typeof Locales[keyof typeof Locales];
		type Values = string | InstanceType<typeof IntlMessageFormat>;

		const parsed: Record<Keys, Values> = { ...IntlProvider.defaultMessages, ...Locales[locale as keyof typeof Locales] };

		for (const key in parsed) {
			const value = parsed[key as keyof typeof parsed];
			const message = parseMessage(value as string, locale);

			parsed[key as keyof typeof parsed] = message;
		}

		IntlProvider.Messages = Object.assign(parsed);
	}, [locale]);

	useEffect(() => {
		updateLocale();
	}, [locale, updateLocale]);

	updateLocale();

	const ctx = {
		locale,
		setLocale: (locale: string) => {
			localStorage.setItem(storageKey, locale);
			setLocale(locale);
		},
	};

	// z.setErrorMap((issue, ctx) => {
	// 	if (issue.code === z.ZodIssueCode.invalid_type) {
	// 		if (issue.received === 'undefined') {
	// 			return { message: IntlProvider.Messages.ERROR_REQUIRED };
	// 		}

	// 		return { message: IntlProvider.Messages.ERROR_INVALID_TYPE.format({ expected: issue.expected }) as string };
	// 	}

	// 	return { message: ctx.defaultError };
	// });

	return (
		<IntlProviderContext.Provider key={locale} {...props} value={ctx}>
			{children}
		</IntlProviderContext.Provider>
	);
}

IntlProvider.defaultMessages = Locales['en-US' as keyof typeof Locales] as Record<keyof typeof Locales[keyof typeof Locales], string | InstanceType<typeof IntlMessageFormat>>;
IntlProvider.Messages = {} as Record<keyof typeof IntlProvider.defaultMessages | keyof typeof Locales[keyof typeof Locales], string & InstanceType<typeof IntlMessageFormat>>;

function parseMessage(message: string, locale: string): string | InstanceType<typeof IntlMessageFormat> {
	const parameters = PARAMETERS_REGEX.test(message);
	// const misc = MISC_REGEX.test(message);

	return parameters /* || misc */ ? new IntlMessageFormat(message, locale) : message;
}

export function useLocale() {
	const context = useContext(IntlProviderContext);

	if (context === undefined) {
		throw new Error('useLocale must be used within an IntlProvider');
	}

	return context;
};

export default IntlProvider;