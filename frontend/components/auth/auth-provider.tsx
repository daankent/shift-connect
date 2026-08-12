"use client"

import { createContext, useContext, useState } from "react"
import type { CurrentUser, UserRole } from "@/lib/auth-shared"

type AuthContextValue = {
  user: CurrentUser
  setUser: React.Dispatch<React.SetStateAction<CurrentUser>>
  hasRole: (role: UserRole) => boolean
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({
  initialUser,
  children,
}: {
  initialUser: CurrentUser
  children: React.ReactNode
}) {
  const [user, setUser] = useState(initialUser)

  const hasRole = (role: UserRole): boolean => {
    return Boolean(user?.role === role)
  }

  return (
    <AuthContext.Provider value={{ user, setUser, hasRole }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider")
  }

  return context
}
