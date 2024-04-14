'use client';

import React, { useState } from 'react';
import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';
import MeetingModal from './MeetingModal';
import { useUser } from '@clerk/nextjs';
import { useStreamVideoClient } from '@stream-io/video-react-sdk';

const MeetingTypeList = () => {
	const router = useRouter();
	const [meetingState, setMeetingState] = useState<
		'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
	>();
	const { user } = useUser();
	const client = useStreamVideoClient();

	const createMeeting = async () => {
		// Guard clause for necessary requirements in order to create a meeting. If no `client` or `user`, then exit.
		if (!client || !user) return;

		try {
			const id = crypto.randomUUID();
			const call = client.call('default', id);

			if (!call) throw new Error('Failed to create call');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
			<HomeCard
				img='/icons/add-meeting.svg'
				title='New Meeting'
				description='Start an instant meeting'
				handleClick={() => setMeetingState('isInstantMeeting')}
				className='bg-orange-1'
			/>
			<HomeCard
				img='/icons/join-meeting.svg'
				title='Join Meeting'
				description='Via invitation link'
				handleClick={() => setMeetingState('isJoiningMeeting')}
				className='bg-blue-1'
			/>
			<HomeCard
				img='/icons/schedule.svg'
				title='Schedule Meeting'
				description='Plan your meeting'
				handleClick={() => setMeetingState('isScheduleMeeting')}
				className='bg-purple-1'
			/>
			<HomeCard
				img='/icons/recordings.svg'
				title='View Recordings'
				description='Meeting recordings'
				handleClick={() => router.push('/recordings')}
				className='bg-yellow-1'
			/>

			<MeetingModal
				isOpen={meetingState === 'isInstantMeeting'}
				onClose={() => setMeetingState(undefined)}
				title='Start an Instant Meeting'
				className='text-center'
				buttonText='Start Meeting'
				handleClick={createMeeting}
			/>
		</section>
	);
};

export default MeetingTypeList;
