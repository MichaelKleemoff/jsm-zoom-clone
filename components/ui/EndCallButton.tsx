'use client';

import { useCall } from '@stream-io/video-react-sdk';
import React from 'react';

const EndCallButton = () => {
	const call = useCall();

	return <div>EndCallButton</div>;
};

export default EndCallButton;
