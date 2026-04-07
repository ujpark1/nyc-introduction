const API_URL = 'https://safelaunch.dev';
let queue = [];
let flushing = false;

async function flush(apiKey) {
  if (flushing || queue.length === 0) return;
  flushing = true;
  const batch = queue.splice(0, 50);
  try {
    await fetch(`${API_URL}/api/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ events: batch }),
    });
  } catch {}
  flushing = false;
}

export default function middleware(request) {
  const apiKey = process.env.SAFELAUNCH_API_KEY;
  if (!apiKey) return;

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    '';
  const userAgent = request.headers.get('user-agent') || '';
  let pathname;
  try {
    pathname = new URL(request.url).pathname;
  } catch {
    pathname = request.url;
  }

  queue.push({
    type: 'api.request',
    timestamp: new Date().toISOString(),
    ip,
    userAgent,
    metadata: { path: pathname, method: request.method },
  });

  if (queue.length >= 50) {
    flush(apiKey);
  } else {
    flush(apiKey);
  }
}
