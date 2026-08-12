"use client"
import { SidebarContentEmployee } from "@/components/sidebar/sidebar-content-employee"
import { SidebarContentManager } from "@/components/sidebar/sidebar-content-manager"
import { useAuth } from "@/components/auth/auth-provider"
import { UserRole } from "@/lib/auth-shared"

export default function SidebarMenuContent() {
  const {hasRole} = useAuth()
  return (
    <>
      {hasRole(UserRole.Employee) && <SidebarContentEmployee />}
      {hasRole(UserRole.Manager) && <SidebarContentManager />}
    </>

  )
}
