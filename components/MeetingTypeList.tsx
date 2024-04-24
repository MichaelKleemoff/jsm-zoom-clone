'use client';

import React, { useState } from 'react';
import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';
import MeetingModal from './MeetingModal';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useToast } from './ui/use-toast';

const MeetingTypeList = () => {
	const router = useRouter();
	const [meetingState, setMeetingState] = useState<
		'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
	>();
	const { user } = useUser();
	const client = useStreamVideoClient();
	const [values, setValues] = useState({
		dateTime: new Date(),
		description: '',
		link: '',
	});
	const [callDetails, setCallDetails] = useState<Call>();
	const { toast } = useToast();

	const createMeeting = async () => {
		// Guard clause for necessary requirements in order to create a meeting. If no `client` or `user`, then exit.
		if (!client || !user) return;

		try {
			if (!values.dateTime) {
				toast({
					title: 'Please select a date and time',
				});
				return;
			}

			const id = crypto.randomUUID();
			const call = client.call('default', id);

			if (!call) throw new Error('Failed to create call');

			const startsAt =
				values.dateTime.toISOString() || new Date(Date.now()).toISOString();
			const description = values.description || 'Instant meeting';

			await call.getOrCreate({
				data: {
					starts_at: startsAt,
					custom: {
						description,
					},
				},
			});

			setCallDetails(call);

			if (!values.description) {
				router.push(`/meeting/${call.id}`);
			}

			toast({
				title: 'Meeting Created',
			});
		} catch (error) {
			console.log(error);
			toast({
				title: 'Failed to create meeting',
			});
		}
	};

	return (
		<section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
			<HomeCard
				img='/icons/add-meeting.svg'
				title='New Meeting'
				description='Start an Instant Meeting'
				handleClick={() => setMeetingState('isInstantMeeting')}
				className='bg-orange-1'
			/>
			<HomeCard
				img='/icons/join-meeting.svg'
				title='Join Meeting'
				description='Via Invitation Link'
				handleClick={() => setMeetingState('isJoiningMeeting')}
				className='bg-blue-1'
			/>
			<HomeCard
				img='/icons/schedule.svg'
				title='Schedule Meeting'
				description='Plan Your Meeting'
				handleClick={() => setMeetingState('isScheduleMeeting')}
				className='bg-purple-1'
			/>
			<HomeCard
				img='/icons/recordings.svg'
				title='View Recordings'
				description='Meeting Recordings'
				handleClick={() => router.push('/recordings')}
				className='bg-yellow-1'
			/>

			{!callDetails ? (
				<MeetingModal
					isOpen={meetingState === 'isScheduleMeeting'}
					onClose={() => setMeetingState(undefined)}
					title='Create Meeting'
					handleClick={createMeeting}
				>
					<div className='flex flex-col gap-2.5'>
						<label className='text-base text-normal leading-[22px] text-sky-2'>
							Add a description
						</label>
					</div>
				</MeetingModal>
			) : (
				<MeetingModal
					isOpen={meetingState === 'isScheduleMeeting'}
					onClose={() => setMeetingState(undefined)}
					title='Meeting Created'
					className='text-center'
					handleClick={() => {
						// navigator.clipboard.writeText(meetingLink);
						// toast({ title: 'Link copied' });
					}}
					image='/icons/checked.svg'
					buttonIcon='/icons/copy.svg'
					buttonText='Copy Meeting Link'
				/>
			)}
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
