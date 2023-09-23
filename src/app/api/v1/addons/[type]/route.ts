import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function GET(request: NextRequest) {
	// const cookieStore = cookies();
	// const token = cookieStore.get('token');

	// return new Response('Hello, Next.js!', {
	//   status: 200,
	//   headers: { 'Set-Cookie': `token=${token.value}` },
	// })
	// return NextResponse.json({});
}