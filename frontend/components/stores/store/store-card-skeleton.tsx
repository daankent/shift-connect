import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Item, ItemActions, ItemContent, ItemMedia } from "@/components/ui/item"
import { Skeleton } from "@/components/ui/skeleton"

export default function StoreCardSkeleton() {
  return (
    <Card className="relative z-5 mx-auto w-full pt-0">
      <Skeleton className="relative z-20 aspect-16/4 w-full rounded-none bg-gray-200" />
      <CardHeader className={"text-center"}>
        <Skeleton className="z-50 mx-auto size-24 -translate-y-16 rounded-full border-2 border-gray-300 bg-gray-200" />
        <CardTitle className={"-translate-y-12 text-xl"}>
          <Skeleton className="mx-auto h-6 w-32 bg-gray-200" />
        </CardTitle>
        <CardDescription className={"-translate-y-12"}>
          <Skeleton className="mx-auto h-4 w-64 max-w-full bg-gray-200" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <Item variant={"outline"} className={"col-span-2 md:col-span-1"}>
            <ItemContent>
              <Skeleton className="h-4 w-36 bg-gray-200" />
              <Skeleton className="h-4 w-12 bg-gray-200" />
            </ItemContent>
          </Item>

          <Item variant={"outline"} className={"col-span-2 md:col-span-1"}>
            <ItemContent>
              <Skeleton className="h-4 w-44 bg-gray-200" />
              <Skeleton className="h-4 w-10 bg-gray-200" />
            </ItemContent>
            <ItemActions>
              <Skeleton className="h-8 w-24 bg-gray-200" />
            </ItemActions>
          </Item>

          <Item variant={"outline"} className={"col-span-2"}>
            <ItemContent>
              <Skeleton className="mb-1 h-4 w-20 bg-gray-200" />
              {[0, 1, 2].map((manager) => (
                <Item key={manager} variant={"outline"}>
                  <ItemMedia>
                    <Skeleton className="size-8 rounded-full bg-gray-200" />
                  </ItemMedia>
                  <ItemContent>
                    <Skeleton className="h-4 w-40 bg-gray-200" />
                    <Skeleton className="h-4 w-56 max-w-full bg-gray-200" />
                  </ItemContent>
                </Item>
              ))}
            </ItemContent>
          </Item>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-row items-center text-gray-600 italic">
          <Skeleton className="size-4 bg-gray-200" />
          <Skeleton className="ml-2 h-3 w-28 bg-gray-200" />
        </div>
      </CardFooter>
    </Card>
  )
}
