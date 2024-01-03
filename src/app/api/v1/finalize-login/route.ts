import { NextRequest, NextResponse } from 'next/server';
import { fetchAndUpdateUser } from '~/stores/user';
import oauth, { scope } from '~/lib/oauth';
import { setCookie } from 'cookies-next';

export async function GET(request: NextRequest) {
	const url = new URL(request.url);

	const code = url.searchParams.get('code');
	if (!code) {
		return NextResponse.json({ success: false, error: { message: 'Code search parameter is missing.' } });
	}

	const token = await oauth.tokenRequest({ code, grantType: 'authorization_code', scope }).catch(() => null);
	if (!token) {
		return NextResponse.json({
			success: false,
			error: {
				message: 'Failed to request authorization token from code. Is the code valid?'
			}
		});
	}

	if (!token) {
		return NextResponse.json({
			success: false,
			error: {
				message: 'Failed to get user information using the authorization token.'
			}
		});
	}

	const res = NextResponse.redirect(url.origin);

	setCookie('authorization', token.access_token, { res, req: request, maxAge: token.expires_in });
	setCookie('refresh', token.refresh_token, { res, req: request });

	const success = await fetchAndUpdateUser(token.access_token, token.refresh_token);

	if (!success) {
		return NextResponse.json({
			success: false,
			error: {
				message: 'Failed to update user information using the authorization token.'
			}
		});
	}

	return res;
}