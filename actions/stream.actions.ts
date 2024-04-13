'use server';
import { currentUser } from '@clerk/nextjs/server';

// Code here will only be run on the server.

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
	const user = await currentUser();

	// Guard clauses
	if (!user) throw new Error('User is not logged in');
	if (!apiKey) throw new Error('No API key');
	if (!apiSecret) throw new Error('No API secret');

	const streamClient = new streamClient();
};
