import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Workflow } from "lucide-react"
import { SidebarContentManager } from "@/components/sidebar/sidebar-content-manager"
import { SidebarContentEmployee } from "@/components/sidebar/sidebar-content-employee"
export function AppSidebar() {
  return (
    <Sidebar variant={"sidebar"} className={"p-2"}>
      <SidebarHeader className={"flex flex-row items-center"}>
        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
          <Workflow className="size-4" />
        </div>
        <div className="ml-2 flex flex-col items-start">
          <h1 className={"text-md font-semibold"}>ShiftConnect</h1>
          <h2 className={"text-xs"}>Management / Medewerker</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarContentEmployee />
        <SidebarContentManager />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
