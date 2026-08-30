import { NextResponse } from 'next/server';
import { submitToIndexNow } from '../../../lib/indexnow';

const currentUrls = [
  'https://koretskiy.com/en',
  'https://koretskiy.com/ru',
  'https://koretskiy.com/uk',
  'https://koretskiy.com/sr',
  'https://koretskiy.com/en/about',
  'https://koretskiy.com/ru/about',
  'https://koretskiy.com/uk/about',
  'https://koretskiy.com/sr/about',
  'https://koretskiy.com/en/damp-diagnostics',
  'https://koretskiy.com/ru/damp-diagnostics',
  'https://koretskiy.com/uk/damp-diagnostics',
  'https://koretskiy.com/sr/damp-diagnostics',
];

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
