'use client';

import Loader from '@/components/Loader';
import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import React, { useState } from 'react';

const Meeting = ({ params: id }: { params: { id: string } }) => {
	const { user, isLoaded } = useUser();
	const [isSetupComplete, setIsSetupComplete] = useState(false);
	const { call, isCallLoading } = useGetCallById(id);

	if (!isLoaded || isCallLoading) return <Loader />;

	return (
		<main className='h-screen w-full'>
			{/* Which call are we currently in? Develop a custom hook. */}
			<StreamCall call={}>
				<StreamTheme>
					{!isSetupComplete ? <MeetingSetup /> : <MeetingRoom />}
				</StreamTheme>
			</StreamCall>
		</main>
	);
};

export default Meeting;
