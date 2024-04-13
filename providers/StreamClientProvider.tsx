import { useUser } from '@clerk/nextjs';
import { StreamVideo, StreamVideoClient } from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState } from 'react';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
	const [videoClient, setVideoClient] = useState<StreamVideoClient>();

	// Get `user` from `@clerk/nextjs`
	const { user, isLoaded } = useUser();

	useEffect(() => {
		// If user isn't loaded or doesn't exist, exit out of the function.
		if (!isLoaded || !user) return;
		// If we don't have the `apiKey`, throw an error
		if (!apiKey) throw new Error('Stream API key missing');
	}, [user, isLoaded]);

	return <StreamVideo client={videoClient}></StreamVideo>;
};

export default StreamVideoProvider;
