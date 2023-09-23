import BitField from '~/structures/bitfield';

export enum Flags {
	DEVELOPER = 1 << 1,
	CONTENT_MODERATOR = 1 << 2,
	STAFF = 1 << 3
}

class UserFlags extends BitField {
	isModerator() {
		return this.has(Flags.CONTENT_MODERATOR);
	}

	isAdmin() {
		return this.has(Flags.STAFF);
	}

	isDeveloper() {
		return this.has(Flags.DEVELOPER);
	}

	*[Symbol.iterator]() {
		for (const bit of Object.values(Flags)) {
			if (typeof bit === 'string' || !this.has(bit)) continue;

			yield bit;
		}
	}
}

export default UserFlags;