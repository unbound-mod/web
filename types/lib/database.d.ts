import { MongoClient, Db } from 'mongodb';

interface Database {
	client: MongoClient;
	db: Db;
	connected?: boolean;
}

interface DatabaseData {
	uri: string,
	name: string;
}

