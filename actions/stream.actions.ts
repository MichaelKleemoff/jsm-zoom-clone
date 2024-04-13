'use server';
import { currentUser } from '@clerk/nextjs/server';
import { StreamClient } from '@stream-io/node-sdk';

// Code here will only be run on the server.

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
	const user = await currentUser();

	// Guard clauses
	if (!user) throw new Error('User is not logged in');
	if (!apiKey) throw new Error('No API key');
	if (!apiSecret) throw new Error('No API secret');

	const client = new StreamClient(apiKey, apiSecret);

	// exp is optional (by default the token is valid for an hour)
	const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
	const issued = Math.floor(Date.now() / 1000) - 60;

	// Create new token
	const token = client.createToken(user.id, exp, issued);

	return token;
};
