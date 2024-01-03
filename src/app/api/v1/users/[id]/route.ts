import { API_ERRORS, API_ERROR_MESSAGES } from '~/constants';
import { NextRequest, NextResponse } from 'next/server';
// import { Users } from '~/stores';

export async function GET(_: NextRequest, { params }: { params: { id: string; }; }) {
	// const user = await Users.get(params.id);

	// if (!user) {
	// return NextResponse.json({ success: false, message: API_ERROR_MESSAGES.UNKNOWN_USER, error: API_ERRORS.UNKNOWN_USER });
	// }

	return NextResponse.json({ success: true });
	// return NextResponse.json({ success: true, data: user });
}