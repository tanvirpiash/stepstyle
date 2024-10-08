import { NextResponse } from 'next/server';

export function middleware(request) {
   if (!request.cookies.has('type')) {
      return NextResponse.redirect(new URL('/sign-in', request.url));
   }
   let cookie = request.cookies.get('type');
   const { pathname } = request.nextUrl;
   const userRole = cookie.value;
   const adminPaths = ['/', '/product', '/profile', '/users-list'];
   const userPaths = ['/', '/product', '/profile'];
   if (userRole === 'admin') {
      const matchesProtectedPath = adminPaths.some((path) => path === pathname);
      if (matchesProtectedPath) {
         return NextResponse.next();
      } else {
         return NextResponse.redirect(new URL('/access-denied', request.url));
      }
   } else if (userRole === 'user') {
      const matchesProtectedPath = userPaths.some((path) => path === pathname);
      if (matchesProtectedPath) {
         return NextResponse.next();
      } else {
         return NextResponse.redirect(new URL('/access-denied', request.url));
      }
   }
}

export const config = {
   matcher: ['/', '/product', '/profile', '/users-list'],
};
