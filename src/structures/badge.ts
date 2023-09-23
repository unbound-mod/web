import type { BadgeData, ColoredBadgeData } from '#structures/badge';
import { getDatabase } from '~/lib/database';

class Badge {
	id: string;
	light: ColoredBadgeData[];
	dark: ColoredBadgeData[];
	amoled: ColoredBadgeData[];
	darker: ColoredBadgeData[];

	constructor(data: BadgeData) {
		this.id = data.id;
		this.dark = data.dark;
		this.light = data.light;
		this.amoled = data.amoled;
		this.darker = data.darker;
	}

	async save() {
		const { db } = await getDatabase();

		const collection = db.collection('badges');
		await collection.updateOne({ id: this.id }, { $set: this.toJSON() }, { upsert: true });
	}

	toJSON() {
		return {
			id: this.id,
			light: this.light,
			dark: this.dark,
			amoled: this.amoled,
			darker: this.darker
		};
	}
}

export default Badge;