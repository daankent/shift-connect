import { AppHeader } from "@/components/header"
import Greeting from "@/components/dashboard/greeting"
import PageContainer from "@/components/page-container"

export default function Page() {
  return (
    <>
      <AppHeader crumbs={[{ text: "Dashboard" }]} />
      <PageContainer>
        <Greeting />
      </PageContainer>
    </>
  )
}
