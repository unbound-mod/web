import { NextRequest, NextResponse } from 'next/server';
import type { BadgeData } from '#structures/badge';
import { getDatabase } from '~/lib/database';

export async function GET(request: NextRequest, { params: { id } }: { params: { id: string; }; }) {
	const { db } = await getDatabase();

	const collection = db.collection('badges');
	const badge = await collection.findOne({ id });

	if (!badge) {
		return NextResponse.json({ success: false, message: 'This user does not have any badges.' }, { status: 404 });
	}

	return NextResponse.json(badge);
}

export async function POST(request: NextRequest, { params: { id } }: { params: { id: string; }; }) {
	const { db } = await getDatabase();

	const buffer = await toBuffer(request.body!);

	if (!buffer.length) {
		return NextResponse.json({ success: false, message: 'Malformed body' }, { status: 400 });
	}

	try {
		const data = JSON.parse(buffer.toString());

		console.log(data);
	} catch (e) {
		console.error(e);
	}

	const collection = db.collection('badges');
	const badge = await collection.findOne({ id });

	if (!badge) {
		return NextResponse.json({ success: false, message: 'This user does not have any badges.' }, { status: 404 });
	}

	return NextResponse.json(badge);
}

async function toBuffer(stream: ReadableStream<Uint8Array>) {
	const list = [];
	const reader = stream.getReader();
	while (true) {
		const { value, done } = await reader.read();
		if (value)
			list.push(value);
		if (done)
			break;
	}
	return Buffer.concat(list);
}