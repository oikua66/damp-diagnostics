import { NextResponse } from 'next/server';
import { submitToIndexNow } from '../../../lib/indexnow';

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
