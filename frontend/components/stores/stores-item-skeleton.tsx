import {
  Item,
  ItemActions,
  ItemContent,
} from "@/components/ui/item"

import { Skeleton } from "@/components/ui/skeleton"

export default function StoreItemSkeleton() {
  return (
    <Item variant={"outline"}>
      <ItemContent>
        <Skeleton className="h-4 w-1/8 bg-gray-200" />
          <Skeleton className="h-4 w-1/2 bg-gray-200" />
      </ItemContent>
      <ItemActions>
        <Skeleton className="h-8 w-24 bg-gray-200" />
      </ItemActions>
    </Item>
  )
}
