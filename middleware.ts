import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const supported = new Set(['en', 'ru', 'uk', 'sr']);

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0].toLowerCase();

  if (host === 'koretskiy.rs' || host === 'www.koretskiy.rs') {
    return NextResponse.redirect('https://koretskiy.com/sr', 308);
  }

  const firstSegment = request.nextUrl.pathname.split('/').filter(Boolean)[0];
  const lang = supported.has(firstSegment) ? firstSegment : 'en';

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-site-lang', lang);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)'],
};
