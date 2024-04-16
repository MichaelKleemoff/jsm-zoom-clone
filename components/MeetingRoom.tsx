import { PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk';
import React, { useState } from 'react';

// We can several layout styles. Define them as a `type` here.
type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';

const MeetingRoom = () => {
	const [layout, setLayout] = useState<CallLayoutType>('speaker-left');

	// Create a new functional component which will render a specific layout depending on the current layout state.
	const CallLayout = () => {
		switch (layout) {
			case 'grid':
				return <PaginatedGridLayout />;
			case 'speaker-right':
				// If the speaker is on the right, the participants are placed on the left.
				return <SpeakerLayout participantsBarPosition={'left'} />;
			default:
				// If the speaker is on the left, the participants are placed on the right.
				return <SpeakerLayout participantsBarPosition={'right'} />;
		}
	};

	return (
		<section className='relative h-screen w-full overflow-hidden pt-4 text-white'>
			<div className='relative flex size-full items-center justify-center'>
				<div className='flex size-full max-w-[1000px] items-center'>
					<CallLayout />
				</div>
			</div>
		</section>
	);
};

export default MeetingRoom;
