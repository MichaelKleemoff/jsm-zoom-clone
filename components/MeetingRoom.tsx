import React, { useState } from 'react';

const MeetingRoom = () => {
	const [layout, setLayout] = useState('speaker-left');

	return (
		<section className='relative h-screen w-full overflow-hidden pt-4 text-white'>
			<div className='relative flex size-full items-center justify-center'>
				<div className='flex size-full max-w-[1000px] items-center'></div>
			</div>
		</section>
	);
};

export default MeetingRoom;
