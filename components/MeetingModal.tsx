import React, { ReactNode } from 'react';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

interface MeetingModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	className?: string;
	children?: ReactNode;
	buttonText?: string;
	handleClick?: () => void;
	image?: string;
	buttonIcon?: string;
}

const MeetingModal = ({
	isOpen,
	onClose,
	title,
	className,
	children,
	buttonText,
	handleClick,
	image,
	buttonIcon,
}: MeetingModalProps) => {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogTrigger>Open</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default MeetingModal;
