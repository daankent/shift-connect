import { NextResponse } from "next/server"
import { ACCESS_TOKEN_COOKIE } from "@/lib/auth-shared"
import { isSecureRequest } from "@/lib/auth-cookie"

export async function POST(request: Request) {
  const response = NextResponse.json({ success: true })

  response.cookies.set(ACCESS_TOKEN_COOKIE, "", {
    httpOnly: true,
    secure: isSecureRequest(request),
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  })

  return response
}
