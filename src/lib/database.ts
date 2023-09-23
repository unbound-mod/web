import type { DatabaseData, Database } from '#lib/database';
import { DB_COLLECTIONS } from '~/constants';
import { MongoClient } from 'mongodb';

const data: DatabaseData = {
	uri: process.env.MONGODB_URI!,
	name: process.env.MONGODB_DB!
};

export const database: Nullable<Database> | Database = process.env.NODE_ENV === 'development' ? global._mongoClient ?? {
	client: null,
	db: null,
	connected: false
} : {
	client: null,
	db: null,
	connected: false
};

if (!data.uri) {
	throw new Error('MONGODB_URI is missing from the the process environment.');
}

if (!data.name) {
	throw new Error('MONGODB_DB is missing from the the process environment.');
}

export async function getDatabase(): Promise<Database> {
	if (database.connected) {
		return database as Database;
	}

	const client = await MongoClient.connect(data.uri!);
	const db = await client.db(data.name!);

	database.client = client;
	database.db = db;
	database.connected = true;

	if (process.env.NODE_ENV === 'development') {
		global._mongoClient = database as Database;
	}

	// Create any missing collections
	for (const collection of DB_COLLECTIONS) {
		if (db.collection(collection)) continue;
		await db.createCollection(collection);
	}

	return { client, db };
}

getDatabase();