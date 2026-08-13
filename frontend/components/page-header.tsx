import { Separator } from "@base-ui/react"

export default function PageHeader({title, subtitle}: {title: string, subtitle?: string}) {
  return (
    <div className={"fixed top-16 pt-2 z-5 bg-background w-full"}>
      <h1 className="text-xl font-medium">{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      <Separator />
    </div>
  )
}
