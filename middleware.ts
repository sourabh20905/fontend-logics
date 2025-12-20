import { NextRequest, NextResponse } from "next/server";
import { getRoleFromCookie } from "./src/lib/mockAuth";

export function middleware(req: NextRequest) {
  const role = getRoleFromCookie(req.headers.get("cookie") || "");
  const pathname = req.nextUrl.pathname;

  // Not logged in
  if (!role && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Admin-only
  if (pathname.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

// this tells when to run the middleware in next js 

export const config = {  
  matcher: ["/admin/:path*", "/dashboard"],
};


