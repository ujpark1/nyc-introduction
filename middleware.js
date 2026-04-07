import { safelaunchMiddleware } from '@safelaunch/sdk-node/next';

const safelaunch = safelaunchMiddleware({
  apiKey: process.env.SAFELAUNCH_API_KEY,
});

export default function middleware(request) {
  const blocked = safelaunch(request);
  if (blocked) return blocked;
}
