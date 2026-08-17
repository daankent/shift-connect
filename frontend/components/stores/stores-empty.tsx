import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { SquareDashed } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StoreEmpty({resetSearchTerm}: {resetSearchTerm: () => void}) {
  return (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant={"icon"}>
        <SquareDashed/>
      </EmptyMedia>
      <EmptyTitle>Geen winkels gevonden</EmptyTitle>
      <EmptyDescription>Er konden geen winkels worden gevonden met deze zoekopdracht. Probeer een andere zoekterm om verder te zoeken.</EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button onClick={resetSearchTerm}>Reset zoekterm</Button>
    </EmptyContent>
  </Empty>
  )
}