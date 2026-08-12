import "server-only"

import { apiFetch } from "@/lib/api"
import type { CurrentUser } from "@/lib/auth-shared"

export async function getCurrentUser(): Promise<CurrentUser | null> {
  try {
    const response = await apiFetch("/accounts/me")

    if (!response.ok) {
      return null
    }

    return response.json()
  } catch {
    return null
  }
}
