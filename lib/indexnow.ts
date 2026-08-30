const INDEXNOW_KEY = '79161d958e9ced939db6b95c658c8f49';
const SITE_URL = 'https://koretskiy.com';

export function normalizeIndexNowUrls(urls: string[]) {
  return urls
    .map((value) => {
      try {
        const url = new URL(value, SITE_URL);
        if (url.hostname !== 'koretskiy.com') return null;
        url.protocol = 'https:';
        url.hash = '';
        return url.toString();
      } catch {
        return null;
      }
    })
    .filter((value): value is string => Boolean(value));
}

export async function submitToIndexNow(urls: string[]) {
  const urlList = [...new Set(normalizeIndexNowUrls(urls))];

  if (urlList.length === 0) {
    return { ok: false, status: 400, message: 'No valid koretskiy.com URLs supplied.' };
  }

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: 'koretskiy.com',
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
    cache: 'no-store',
  });

  return {
    ok: response.ok,
    status: response.status,
    message: response.ok ? 'Submitted to IndexNow.' : await response.text(),
    submitted: urlList,
  };
}
