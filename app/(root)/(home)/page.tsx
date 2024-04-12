import React from 'react';

const Home = () => {
	return (
		<section className='flex size-full flex-col gap-10 text-white'>
			{/* Banner */}
			<div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
				<div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
					<h2>Upcoming Meeting: 12:30 PM</h2>
				</div>
			</div>
		</section>
	);
};

export default Home;
