'use server';;
import type { RawUser, UserSchema } from '#structures/user';

import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { getDatabase } from '~/lib/database';
import OAuth, { scope } from '~/lib/oauth';
import { cookies } from 'next/headers';

export async function logOut() {
	const authorization = getCookie('authorization', { cookies });

	deleteCookie('authorization', { cookies });
	deleteCookie('refresh', { cookies });

	if (authorization) {
		try {
			await OAuth.revokeToken(authorization);
		} catch (error) {
			console.error('Failed to revoke authorization token. Is it valid?', { error, authorization });
		}
	}
}

export async function fetchAndUpdateUser(authorization: string, refresh: string): Promise<UserSchema> {
	const database = await getDatabase();

	const users = database.db.collection('users');
	let user = await OAuth.getUser(authorization).catch(() => null) as RawUser;

	if (!user) {
		try {
			const request = await OAuth.tokenRequest({ grantType: 'refresh_token', refreshToken: refresh, scope });

			setCookie('authorization', request.access_token, { maxAge: request.expires_in });
			setCookie('refresh', request.refresh_token);

			user = await OAuth.getUser(request.access_token) as RawUser;
		} catch (e) {
			console.error('Failed to refresh access token, aborting.');

			// @ts-ignore
			return logOut();
		}
	}

	const data = { user, authorization, refresh, id: user.id };

	await users.findOneAndUpdate({ id: user.id }, { $set: data }, { upsert: true });

	return data;
}