import { UserData } from '@structures/user';
import { getDatabase } from '~/lib/database';
import { User } from '~/structures';

class Users {
	users = new Map<User['id'], User>();

	set(id: string, user: User) {
		return this.users.set(id, user);
	}

	async get(id: string) {
		const { db } = await getDatabase();

		if (!this.users.has(id)) {
			const collection = await db.collection('users');
			const data = await collection.findOne({ id }) as unknown as UserData;
			if (!data) return null;

			const user = new User(data);
			this.set(id, user);

			return user;
		}

		return this.users.get(id);
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Users();