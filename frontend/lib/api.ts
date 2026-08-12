import "server-only"

import { cookies } from "next/headers"
import { ACCESS_TOKEN_COOKIE } from "@/lib/auth-shared"


export async function apiFetch(path: string, options: RequestInit = {}) {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value

  const headers = new Headers(options.headers)

  if (accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`)
  }

  if (options.body && !(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json")
  }

  const url = path.startsWith("http") ? path : `${process.env.API_URL}${path}`

  return fetch(url, {
    ...options,
    headers,
    cache: options.cache ?? "no-store",
  })
}
