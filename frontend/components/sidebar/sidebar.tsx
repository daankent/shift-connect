import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { SidebarContentManager } from "@/components/sidebar/sidebar-content-manager"
import { SidebarContentEmployee } from "@/components/sidebar/sidebar-content-employee"
import { SidebarAccount } from "@/components/sidebar/sidebar-account"
import { Logo } from "@/components/logo"
export function AppSidebar() {
  return (
    <Sidebar variant={"sidebar"}>
      <SidebarHeader className={"p-4"}>
        <Logo/>
      </SidebarHeader>
      <SidebarContent className={"p-2"}>
        <SidebarContentEmployee />
        <SidebarContentManager />
      </SidebarContent>
      <SidebarFooter>
        <SidebarAccount />
      </SidebarFooter>
    </Sidebar>
  )
}
