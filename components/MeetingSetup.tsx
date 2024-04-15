import { VideoPreview, useCall } from '@stream-io/video-react-sdk';
import React, { useEffect, useState } from 'react';

const MeetingSetup = () => {
	const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);

	const call = useCall();

	useEffect(() => {}, [isMicCamToggledOn, call?.camera, call?.microphone]);

	return (
		<div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
			<h1 className='text-2xl font-bold'>Setup</h1>
			<VideoPreview />
		</div>
	);
};

export default MeetingSetup;
