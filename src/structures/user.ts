import type { RawUser } from '#structures/user';
import UserFlags from '~/structures/user-flags';
import { getDatabase } from '~/lib/database';

export enum Connections {
	GITHUB = 1,
	PATREON = 2,
}

class User {
	// connections: Connection[];
	displayName?: string;
	username: string;
	flags: UserFlags;
	id: string;

	constructor(data: RawUser) {
		this.username = data.username;
		this.id = data.id;

		// this.connections = data.connections ?? [];
		this.flags = new UserFlags(data.flags);

		if (data.global_name) {
			this.displayName = data.global_name;
		}
	}

	async save() {
		const { db } = await getDatabase();

		const collection = db.collection('users');
		await collection.updateOne({ id: this.id }, { $set: this.toJSON() }, { upsert: true });
	}

	toJSON() {
		return {
			flags: this.flags.bitfield,
			username: this.username,
			displayName: this.displayName,
			// connections: this.connections,
			id: this.id
		};
	}
}

export default User;