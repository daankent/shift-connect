import { Store } from "@/app/(app)/(employee)/stores/page"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { ChevronRight, Store as StoreIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function StoreItem({store}: {store: Store}) {
  return (
    <Item variant={"outline"} >
      <ItemMedia>
        <StoreIcon className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{store.storeNumber}</ItemTitle>
        <ItemDescription>{store.address}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Link href={"/stores/" + store.storeNumber}>
          <Button variant="outline" size="default">
            Bekijk
            <ChevronRight />
          </Button>
        </Link>
      </ItemActions>
    </Item>
  )
}