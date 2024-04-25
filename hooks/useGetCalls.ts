import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useState } from 'react';

export const useGetCalls = () => {
	const [calls, setCalls] = useState<Call[]>([]);
	const client = useStreamVideoClient();
};
