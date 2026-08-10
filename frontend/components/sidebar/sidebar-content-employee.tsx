import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Box, ChevronRight } from "lucide-react"

export function SidebarContentEmployee() {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Zoeken (medewerker)</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip={"tEst"}>
              <Box />
              <span>Open Shifts</span>
              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarMenuItem>
          <SidebarMenuButton tooltip={"tEst"}>
            <Box />
            <span>Winkels</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Jouw Activiteiten (medewerker)</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip={"tEst"}>
              <Box />
              <span>Toegewezen Shifts</span>
              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </>
  )
}
