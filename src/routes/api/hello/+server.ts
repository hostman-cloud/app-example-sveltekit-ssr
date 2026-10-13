import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
	return json({
		message: 'Hello from the SvelteKit API (runs on the server)',
		at: new Date().toISOString()
	});
};
