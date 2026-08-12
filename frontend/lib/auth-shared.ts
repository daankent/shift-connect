export const UserRole = {
  Employee: "EMPLOYEE",
  Manager: "MANAGER",
} as const

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

export type CurrentUser = {
  id: string
  firstName: string
  lastName: string
  email: string
  role: UserRole
  storeNumber: string
}

export const ACCESS_TOKEN_COOKIE = "access_token"
