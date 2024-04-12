import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const protectedRoutes = createRouteMatcher([
	'/',
	'/upcoming',
	'/previous',
	'/recordings',
	'/personal-room',
	'/meeting(.*)',
]);

export default clerkMiddleware();

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
