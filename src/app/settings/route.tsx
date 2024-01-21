import { getCookie } from 'cookies-next';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const cookie = getCookie('authorization', { req: request });
	const path = new URL(cookie ? '/settings/account' : '/settings/appearance', request.url);

	return NextResponse.redirect(path);
}