import { Workflow } from "lucide-react"

export function Logo(){
  return (
    <div className="flex flex-row items-center">
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
        <Workflow className="size-4" />
      </div>
      <div className="ml-2 flex flex-col items-start">
        <h1 className={"text-md font-semibold"}>ShiftConnect</h1>
      </div>
    </div>
  )
}