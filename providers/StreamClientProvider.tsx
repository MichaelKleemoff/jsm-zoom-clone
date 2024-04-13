import { StreamVideo, StreamVideoClient } from '@stream-io/video-react-sdk';
import { ReactNode, useState } from 'react';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
	const [videoClient, setVideoClient] = useState();

	return <StreamVideo client={client}></StreamVideo>;
};

export default StreamVideoProvider;
