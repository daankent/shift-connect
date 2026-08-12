
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { SidebarAccount } from "@/components/sidebar/sidebar-account"
import { Logo } from "@/components/logo"
import SidebarMenuContent from "@/components/sidebar/sidebar-menu-content"
export function AppSidebar() {
  return (
    <Sidebar variant={"sidebar"}>
      <SidebarHeader className={"p-4"}>
        <Logo />
      </SidebarHeader>
      <SidebarContent className={"p-2"}>
        <SidebarMenuContent />
      </SidebarContent>
      <SidebarFooter>
        <SidebarAccount />
      </SidebarFooter>
    </Sidebar>
  )
}
