import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SidebarTrigger } from "@/components/ui/sidebar"

type Crumb = {
  text: string;
  href?: string;
}

export function AppHeader({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger />{" "}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/" className={"text-sidebar-primary font-bold"}>ShiftConnect</Link>} />
          </BreadcrumbItem>

          {crumbs?.map((crumb: Crumb) => {

            return (
              <div key={crumb.text} className={"flex flex-row items-center"}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {crumb.href ? <BreadcrumbLink render={<Link href={crumb.href}>{crumb.text}</Link>} /> :
                    <BreadcrumbPage>{crumb.text}</BreadcrumbPage>}
                </BreadcrumbItem>
              </div>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  )
}