'use client';

import { useGetCalls } from '@/hooks/useGetCalls';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import MeetingCard from './MeetingCard';

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

	const calls = getCalls();
	const noCallsMessage = getNoCallsMessage();

	return <div className='grid grid-cols-1 gap-5 xl:grid-cols-2'>{
		// If calls exist, `map` through `MeetingCard`(s), rendering them. Otherwise, render an `h1` with a `noCallsMessage`.
		calls && calls.length > 0 ? calls.map((meeting:Call | CallRecording) => (
			<MeetingCard />
		) : (
			<h1>{noCallsMessage}</h1>
		))}
	</div>
};

export default CallList;
