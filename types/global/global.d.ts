import { Database } from '../lib/database';

declare global {
	var _mongoClient: Database;
}

export { };