import { NextResponse } from 'next/server';
import oauth from '~/lib/oauth';

export async function GET() {
	return NextResponse.redirect(oauth.generateAuthUrl({ scope: process.env.SCOPE! }));
}