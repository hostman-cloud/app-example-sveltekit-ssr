import type { PageServerLoad } from './$types';

/* load from +page.server.ts runs only on the server, the browser receives just its result */
export const load: PageServerLoad = ({ request }) => {
	return {
		renderedAt: new Date().toISOString(),
		nodeVersion: process.version,
		userAgent: request.headers.get('user-agent') ?? '—'
	};
};
