import { AppHeader } from "@/components/header"
import PageHeader from "@/components/page-header"
import PageContainer from "@/components/page-container"
import { apiFetch } from "@/lib/api"
import { redirect } from "next/navigation"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import StoresList from "@/components/stores/stores-list"

export type Store = {
  storeNumber: string
  address: string
  lat: number
  lon: number
}

export default async function StoresPage() {
  let stores: Store[] = [];

  let errorMessage: string | null = null;
  try {
    const res = await apiFetch("/stores")

    if (!res.ok) {
      if (res.status === 401) redirect("/auth/login")
      if (res.status === 403) redirect("/")
      errorMessage = "Er is iets misgegaan bij het ophalen van de winkels."
    }

    stores = await res.json()
  } catch {
    errorMessage = "Er is iets misgegaan bij het ophalen van de winkels."

  }


  return (
    <>
      <AppHeader crumbs={[{ text: "Winkels" }]} />
      <PageContainer>
        <PageHeader
          title="Winkels"
          subtitle="Hier vind je alle winkels die in het systeem staan"
        />

        {errorMessage ? (
          <Alert
            variant="destructive"
            className={"mb-4 border-red-400 bg-red-50"}
          >
            <AlertCircle />
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        ) : (
          <StoresList stores={stores}/>
        )}
      </PageContainer>
    </>
  )
}
