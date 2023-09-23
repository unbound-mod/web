export interface BadgeData {
	id: string;
	dark: ColoredBadgeData[];
	light: ColoredBadgeData[];
	amoled: ColoredBadgeData[];
	darker: ColoredBadgeData[];
}

export interface ColoredBadgeData {
	name: string;
	url: string;
}