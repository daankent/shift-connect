import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { ACCESS_TOKEN_COOKIE } from "@/lib/auth-shared"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isLoggedIn = request.cookies.has(ACCESS_TOKEN_COOKIE)

  if (pathname === "/auth/login" && isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  if (pathname !== "/auth/login" && !isLoggedIn) {
    const loginUrl = new URL("/auth/login", request.url)

    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/auth/login"],
}
