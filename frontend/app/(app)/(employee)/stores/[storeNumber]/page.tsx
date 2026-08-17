// TODO: Winkel informatie over managers, aantan medewerkers, aantal openstaande shifts etc inladen
import { AppHeader } from "@/components/header"
import PageContainer from "@/components/page-container"

import { Button } from "@/components/ui/button"
import { apiFetch } from "@/lib/api"
import { Store } from "@/app/(app)/(employee)/stores/page"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

import { Suspense } from "react"
import StoreItemSkeleton from "@/components/stores/stores-item-skeleton"
import { redirect } from "next/navigation"
import StoreCard from "@/components/stores/store/store-card"
import ErrorAlert from "@/components/error-message"
import StoreCardSkeleton from "@/components/stores/store/store-card-skeleton"

export default async function StorePage({
  params,
}: {
  params: Promise<{ storeNumber: string }>
}) {
  const { storeNumber } = await params

  return (
    <>
      <AppHeader
        crumbs={[
          { text: "Winkels", href: "/stores" },
          { text: `Winkel ${storeNumber}` },
        ]}
      />
      <PageContainer>
        <Link href={"/stores"} className={"-translate-x-4"}>
          <Button variant={"link"} size={"default"}>
            <ChevronLeft /> Terug naar winkels
          </Button>
        </Link>

        <Suspense fallback={<StoreCardSkeleton />}>
          <StorePageContent storeNumber={storeNumber} />
        </Suspense>
      </PageContainer>
    </>
  )
}

async function StorePageContent({ storeNumber }: { storeNumber: string }) {
  let store: Store | null = null
  let errorMessage: string | null = null

  try {
    const res = await apiFetch(`/stores/${storeNumber}`)

    if (!res.ok) {
      if (res.status === 401) redirect("/auth/login")
      else if (res.status === 403) redirect("/")
      else if (res.status === 404)
        errorMessage = "De winkel met dit nummer kon niet worden gevonden."
      else errorMessage = "Er is iets misgegaan bij het ophalen van de winkel."
    }

    store = await res.json()
  } catch {
    errorMessage = "Er is iets misgegaan bij het ophalen van de winkels."
  }

  return errorMessage ? (
   <ErrorAlert message={errorMessage} />
  ) : (
    store && <StoreCard store={store} />
  )
}
