import { NextResponse } from "next/server";

export function middleware(request) {
  const { cookies } = request;
  const token = cookies.get("token")?.value;
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

  // Allow access to auth routes for unauthenticated users
  if (!token && pathname === "/login-page") {
    return NextResponse.next();
  }

  // Redirect authenticated users away from signin page
  if (token && pathname.startsWith("/login-page")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect unauthenticated users to signin
  if (!token) {
    return NextResponse.redirect(new URL("/login-page", request.url));
  }

  return NextResponse.next();
}
