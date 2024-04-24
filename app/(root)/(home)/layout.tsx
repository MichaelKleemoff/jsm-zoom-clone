import React, { ReactNode } from 'react';
import NavBar from '@/components/NavBar';
import Sidebar from '@/components/Sidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Yoom',
	description: 'Video calling app',
	icons: {
		icon: '/icons/logo.svg',
	},
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main className='relative'>
			<NavBar />
			<div className='flex'>
				<Sidebar />
				<section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
					<div className='w-full'>{children}</div>
				</section>
			</div>
		</main>
	);
};

export default HomeLayout;
