'use client';

import { useGetCalls } from '@/hooks/useGetCalls';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CallList = ({ type }: { type: 'ended' | 'upcoming' | 'recordings' }) => {
	const { endedCalls, upcomingCalls, callRecordings, isLoading } =
		useGetCalls();
	const router = useRouter();

	const [recordings, setRecordings] = useState<CallRecording[]>([]);

	// Will return the exact type of calls we want depending on the page we are on.
	const getCalls = () => {
		switch (type) {
			case 'ended':
				return endedCalls;
			case 'upcoming':
				return upcomingCalls;
			case 'recordings':
				return recordings;
			default:
				return [];
		}
	};

	const getNoCallsMessage = () => {
		switch (type) {
			case 'ended':
				return 'No Previous Calls';
			case 'upcoming':
				return 'No Upcoming Calls';
			case 'recordings':
				return 'No Recordings';
			default:
				return '';
		}
	};

	return <div>CallList</div>;
};

export default CallList;
