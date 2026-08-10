import { Button } from "@/components/ui/button"
import { TimebasedGreeting } from "@/components/timebased-greeting"
import { AppHeader } from "@/components/header"

export default function Page() {
  return (
    <>
      <AppHeader crumbs={[{text: "Dashboard"}]} />
      <div className="flex min-h-svh p-6">
        <div className="flex flex-col gap-4 text-sm leading-loose">
          <div>
            <h1 className="text-xl font-medium">
              <TimebasedGreeting name={"Daan"} />
            </h1>
            <p>
              Start met het zoeken van open shifts als je andere winkels wil
              helpen
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
