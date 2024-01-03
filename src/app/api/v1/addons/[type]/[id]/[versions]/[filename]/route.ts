import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '~/lib/database';

export async function GET(request: NextRequest, { params }: { params: { type: string, id: string, filename: string; }; }) {
	const { db } = await getDatabase();

	const collection = db.collection('addons');
	const res = collection.find({ id: params.id }).toArray();


	const nameEnd = params.filename.lastIndexOf('.');
	const name = params.filename.substring(0, nameEnd);
	const ext = params.filename.substring(nameEnd + 1);
	// return { status: 404 };

	switch (name) {
		case 'manifest':
			if (ext === 'json') {
				return NextResponse.json({ id: 'you.have.aids' }); // manifest
			} else {
				return new NextResponse("asdf");
			}

		case 'bundle':
			if (params.type === 'plugin' && ext === 'js') {
				return new NextResponse('window.alert("fuck you");');
			} else if (params.type === 'theme' && ext === 'json') {
				return new NextResponse('{"colors": {"fuck": "you"}}');
			} else {
				return NextResponse.json({}, { status: 404, statusText: 'Invalid bundle extension' });
			}

		default:
			return NextResponse.json({}, { status: 404, statusText: 'File not found' });

	}
}