import { tokenProvider } from '@/actions/stream.actions';
import Loader from '@/components/Loader';
import { useUser } from '@clerk/nextjs';
import { StreamVideo, StreamVideoClient } from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState } from 'react';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
	const [videoClient, setVideoClient] = useState<StreamVideoClient>();

	// Get `user` from `@clerk/nextjs`
	const { user, isLoaded } = useUser();

	useEffect(() => {
		// Guard clauses:
		// If user isn't loaded or doesn't exist, exit out of the function.
		if (!isLoaded || !user) return;
		// If we don't have the `apiKey`, throw an error
		if (!apiKey) throw new Error('Stream API key missing');

		// Call new `StreamVideoClient` as a function and provide an `options` object
		const client = new StreamVideoClient({
			apiKey,
			// Which user is defining this client?
			user: {
				id: user?.id,
				// The 2nd thing a user has to have is a `username` or user id if for some reason we don't have the username
				name: user?.username || user?.id,
				image: user?.imageUrl,
			},
			// The last thing we need is a `tokenProvider`. This is to be accessed from the server side since it is secret.
			tokenProvider,
		});

		setVideoClient(client);
	}, [user, isLoaded]);

	if (!videoClient) return <Loader />;

	return <StreamVideo client={videoClient}></StreamVideo>;
};

export default StreamVideoProvider;
