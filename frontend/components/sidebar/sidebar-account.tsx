"use client"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  PersonStanding,
  ChevronsUpDown,
  LogOut,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/components/auth/auth-provider"
import { roleFormatter } from "@/lib/roleFormatter"
import { useRouter } from "next/navigation"

export function SidebarAccount() {
  const { isMobile } = useSidebar()
  const {user} = useAuth();

  const router = useRouter()

  async function handleLogout() {
    await fetch("/api/auth/logout", {
      method: "POST",
    })

    router.replace("/auth/login")
    router.refresh()
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar className="h-8 w-8 rounded-lg border border-sidebar-ring after:border-0">
                  <AvatarFallback className="rounded-lg">
                    {user.firstName[0].toUpperCase()}
                    {user.lastName[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {user.firstName} {user.lastName}
                  </span>
                  <span className="truncate text-xs">
                    {roleFormatter(user.role)}
                  </span>
                </div>

                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>
            }
          ></DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg border border-sidebar-ring after:border-0">
                    <AvatarFallback className="rounded-lg">
                      {user.firstName[0].toUpperCase()}
                      {user.lastName[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-opacity-100 grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {user.firstName} {user.lastName}
                    </span>
                    <span className="truncate text-xs font-medium">
                      {roleFormatter(user.role)}
                    </span>
                    <span className="truncate text-xs">{user.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem>
                <PersonStanding />
                Account
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className={"text-red-700"}
              onClick={handleLogout}
            >
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
