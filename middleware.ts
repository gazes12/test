import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const url = request.nextUrl.pathname;
  const slugs = url.split('/');
  const slug = slugs[slugs.length - 1];

  requestHeaders.set('x-slug', slug)
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })

  return response;
}
 