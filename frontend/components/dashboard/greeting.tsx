"use client"

import getTimebasedGreeting from "@/lib/timebasedGreeting"
import { useAuth } from "@/components/auth/auth-provider"
import { UserRole } from "@/lib/auth-shared"

export default function Greeting() {
  const { user, hasRole } = useAuth()

  return (
    <div>
      <h1 className="text-xl font-medium">
        {getTimebasedGreeting(user.firstName)}
      </h1>
      {hasRole(UserRole.Employee) && (
        <p>
          Start met het zoeken van open shifts als je andere winkels wil helpen
        </p>
      )}

      {hasRole(UserRole.Manager) && (
        <p>
          Start met het plaatsen van open shifts om hulp te krijgen van andere winkels
        </p>
      )}
    </div>
  )
}
