import {
	StreamCall,
	StreamVideo,
	StreamVideoClient,
	User,
} from '@stream-io/video-react-sdk';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call('default', 'my-first-call');
call.join({ create: true });

export const App = () => {
	return (
		<StreamVideo client={client}>
			<StreamCall call={call}></StreamCall>
		</StreamVideo>
	);
};
