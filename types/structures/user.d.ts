import { Connections } from '~/structures/user';

export interface Connection {
	type: ConnectionType;
	url: string;
}

export interface UserData {
	displayName: string;
	username: string;
	flags: number;
	bio: string;
	id: string;
	connections: Connection[];
}