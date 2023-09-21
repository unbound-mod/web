import { colorize } from '~/utilities';

export function log(...args: string[]): void {
	return console.log('»', ...args);
}

export function error(...args: string[]): void {
	return console.error(colorize('»', 'red'), ...args);
}

export function success(...args: string[]): void {
	return console.log(colorize('»', 'green'), ...args);
}

export function warn(...args: string[]): void {
	return console.warn(colorize('»', 'yellow'), ...args);
}

export function debug(...args: string[]): void {
	if (process.env.NODE_ENV !== 'development') return;

	return console.debug(colorize('»', 'gray'), ...args);
}

export function info(...args: string[]): void {
	return console.info(colorize('»', 'blue'), ...args);
}

export function createLogger(...callers: string[]) {
	const prefix = callers.join(' → ') + ':';

	return {
		log: (...args: any[]) => log(prefix, ...args),
		error: (...args: any[]) => error(prefix, ...args),
		success: (...args: any[]) => success(prefix, ...args),
		warn: (...args: any[]) => warn(prefix, ...args),
		debug: (...args: any[]) => debug(prefix, ...args),
		info: (...args: any[]) => info(prefix, ...args),
	};
}