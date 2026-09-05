import { NextResponse } from 'next/server';
import { submitToIndexNow } from '../../../lib/indexnow';
import { business } from '../../../lib/business';

const currentUrls = ['', '/about', '/tender-equipment', '/perspectives'].flatMap((path) =>
  ['en', 'ru', 'uk', 'sr'].map((lang) => `${business.website.canonicalUrl}/${lang}${path}`),
);

export async function GET() {
  const result = await submitToIndexNow(currentUrls);
  return NextResponse.json(
    { ...result, submittedUrls: currentUrls },
    { status: result.ok ? 200 : result.status || 500 },
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const urls = Array.isArray(body?.urls) ? body.urls : [];
    const result = await submitToIndexNow(urls);
    return NextResponse.json(result, { status: result.ok ? 200 : result.status || 500 });
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Invalid request body.' },
      { status: 400 },
    );
  }
}
