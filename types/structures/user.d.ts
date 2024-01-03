export interface RawUser {
	id: string;
	username: string;
	discriminator: string;
	avatar: string | null | undefined;
	mfa_enabled?: boolean;
	banner?: string | null | undefined;
	accent_color?: number | null | undefined;
	locale?: string;
	verified?: boolean;
	global_name?: string | null | undefined;
	email?: string | null | undefined;
	flags?: number;
	premium_type?: number;
	public_flags?: number;
}

export interface UserSchema {
	user: RawUser;
	authorization: string;
	refresh: string;
	bio?: string;
	id: string;
}
