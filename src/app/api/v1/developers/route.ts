import { NextRequest, NextResponse } from 'next/server';
import { Flags } from '~/structures/user-flags';
import { getDatabase } from '~/lib/database';

export async function GET(request: NextRequest) {
	const { db } = await getDatabase();

	const users = db.collection('users');
	const list = users.find({ flags: { $bitsAnySet: Flags.DEVELOPER } });
	const payload = await list.toArray();

	return NextResponse.json(payload);
}