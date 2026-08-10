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
    <Sidebar variant={"sidebar"} className={"p-2"}>
      <SidebarHeader>
        <Logo/>
      </SidebarHeader>
      <SidebarContent>
        <SidebarContentEmployee />
        <SidebarContentManager />
      </SidebarContent>
      <SidebarFooter>
        <SidebarAccount />
      </SidebarFooter>
    </Sidebar>
  )
}
