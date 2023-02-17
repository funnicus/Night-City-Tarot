import fs from 'fs';
import path from 'path';

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function load() {
	const imageDir = 'src/lib/images/cards';
	const fullPath = path.join(process.cwd(), imageDir);
	const files = fs.readdirSync(fullPath);

	return {
		files
	};
}
