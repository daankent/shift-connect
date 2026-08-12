import type { UserRole } from "@/lib/auth-shared"

export function roleFormatter(role: UserRole) {
  switch (role) {
    case "EMPLOYEE":
      return "Medewerker"
    case "MANAGER":
      return "Manager"
  }
}
