import { AppHeader } from "@/components/header"
import getTimebasedGreeting from "@/lib/timebasedGreeting"

export default function Page() {
  return (
    <>
      <AppHeader crumbs={[{ text: "Dashboard" }]} />
      <div className="flex min-h-svh p-6">
        <div className="flex flex-col gap-4 text-sm leading-loose">
          <div>
            <h1 className="text-xl font-medium">
              {getTimebasedGreeting("Daan")}
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
