import { NextResponse } from "next/server";

export function middleware(request) {
  const { cookies } = request;
  const accessToken = cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // Allow Next.js internal routes and public assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/image") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Allow access to login page for unauthenticated users
  if (!accessToken && pathname === "/login-page") {
    return NextResponse.next();
  }

  // Redirect authenticated users away from login page to home
  if (accessToken && pathname === "/login-page") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect unauthenticated users to login page
  if (!accessToken) {
    return NextResponse.redirect(new URL("/login-page", request.url));
  }

  // For all other cases, allow
  return NextResponse.next();
}
