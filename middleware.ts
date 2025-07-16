import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_PATHS = [
  '/',
  '/auth/signin',
  '/auth/signup',
  '/auth/forgot-password',
  '/auth/reset-password',
  '/auth/email-verification',
  '/about-us',
  '/error-page',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;


  console.info('[Middleware] Pathname:', pathname);
  const token = request.cookies.get('token');
  console.info('[Middleware] Token:', token);


  if (PUBLIC_PATHS.some((path) => pathname === path || pathname.startsWith(path + '/'))) {
    return NextResponse.next();
  }

 
  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = '/auth/signin';
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|public|api).*)'],
};
