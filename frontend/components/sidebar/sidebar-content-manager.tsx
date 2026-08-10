import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  Box,
  CalendarCheck2,
  ChevronRight,
  Layers,
  LayoutList,
} from "lucide-react"

export function SidebarContentManager() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Jouw Winkel (manager)</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip={"tEst"}>
            <Layers />
            <span>Open Shifts</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuButton tooltip={"tEst"}>
            <CalendarCheck2 />
            <span>Geplande Shifts</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
