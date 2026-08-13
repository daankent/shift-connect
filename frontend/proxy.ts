import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { ACCESS_TOKEN_COOKIE } from "@/lib/auth-shared"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hasAccessToken = request.cookies.has(ACCESS_TOKEN_COOKIE)

  if (pathname !== "/auth/login" && !hasAccessToken) {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/stores/:path*"],
}
