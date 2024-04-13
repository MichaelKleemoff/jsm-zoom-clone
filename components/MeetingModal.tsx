import React from 'react';

interface MeetingModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	className: string;
	buttonText: string;
	handleClick: () => void;
}

const MeetingModal = ({
	isOpen,
	onClose,
	title,
	className,
	buttonText,
	handleClick,
}: MeetingModalProps) => {
	return <div>MeetingModal</div>;
};

export default MeetingModal;
