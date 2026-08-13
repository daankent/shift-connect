import { NextResponse } from "next/server"
import { ACCESS_TOKEN_COOKIE } from "@/lib/auth-shared"
import { isSecureRequest } from "@/lib/auth-cookie"

export async function POST(request: Request) {
  const { email, password } = await request.json()

  const loginResponse = await fetch(`${process.env.API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })


  if (!loginResponse.ok) {
    return NextResponse.json(
      { message: "E-mailadres of wachtwoord is onjuist" },
      { status: 401 }
    )
  }

  const { accessToken } = await loginResponse.json()

  const response = NextResponse.json({ success: true })

  response.cookies.set(ACCESS_TOKEN_COOKIE, accessToken, {
    httpOnly: true,
    secure: isSecureRequest(request),
    sameSite: "lax",
    path: "/",
    expires: new Date(Date.now() + 1000 * 60 * 59)
  })

  return response
}
