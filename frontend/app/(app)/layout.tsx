import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/sidebar"
import React from "react"
import { AuthProvider } from "@/components/auth/auth-provider"
import { getCurrentUser } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();

  if(!user) {
    redirect("/auth/login")
  }

  return (
    <AuthProvider initialUser={user}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <main>{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </AuthProvider>
  )
}