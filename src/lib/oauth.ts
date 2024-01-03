import OAuthClient from 'discord-oauth2';

export const clientId = process.env.CLIENT_ID;
export const clientSecret = process.env.CLIENT_SECRET;
export const redirectUri = process.env.NODE_ENV === 'development' ? process.env.REDIRECT_URI_DEV! : process.env.REDIRECT_URI!;
export const scope = process.env.SCOPE!;
export const authUri = `https://discord.com/oauth2/authorize?client_id=${clientId}&scope=${encodeURIComponent(scope)}&permissions=0&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}`;
export const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

const client = new OAuthClient({ clientId, clientSecret, redirectUri, credentials });

export default client;