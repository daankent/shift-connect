"use client"
import { SidebarContentEmployee } from "@/components/sidebar/sidebar-content-employee"
import { SidebarContentManager } from "@/components/sidebar/sidebar-content-manager"
import { useAuth } from "@/components/auth/auth-provider"
import { UserRole } from "@/lib/auth-shared"
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import {
  ChevronRight,
  LayoutDashboard,
} from "lucide-react"
import Link from "next/link"

export default function SidebarMenuContent() {
  const {hasRole} = useAuth()
  return (
    <>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Link href={"/"} className={"flex w-full items-center"}>
                <LayoutDashboard />
                <span className={"ml-2"}>Home</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>

      {hasRole(UserRole.Employee) && <SidebarContentEmployee />}
      {hasRole(UserRole.Manager) && <SidebarContentManager />}
    </>
  )
}
