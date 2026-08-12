import { AppHeader } from "@/components/header"
import Greeting from "@/components/dashboard/greeting"

export default function Page() {
  return (
    <>
      <AppHeader crumbs={[{ text: "Dashboard" }]} />
      <div className="flex min-h-svh p-6">
        <div className="flex flex-col gap-4 text-sm leading-loose">
          <Greeting />
        </div>
      </div>
    </>
  )
}
