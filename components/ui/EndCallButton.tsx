'use client';

import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk';
import React from 'react';
import { Button } from './button';

const EndCallButton = () => {
	const call = useCall();

	const { useLocalParticipant } = useCallStateHooks();
	const localParticipant = useLocalParticipant();

	const isMeetingOwner =
		localParticipant &&
		call?.state.createdBy &&
		localParticipant.userId === call.state.createdBy.id;

	if (!isMeetingOwner) return null;

	return (
		<Button
			onClick={async () => {
				await call.endCall();
			}}
		></Button>
	);
};

export default EndCallButton;
