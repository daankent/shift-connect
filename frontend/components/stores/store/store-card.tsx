import { Store } from "@/app/(app)/(employee)/stores/page"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import StoreManagerList from "@/components/stores/store/store-manager-list"
import { ChevronRight, Locate } from "lucide-react"

export default function StoreCard({store}: {store: Store}){
  return (
    <Card className="relative z-5 mx-auto w-full pt-0">
      <div className="background-pattern relative z-20 aspect-16/4 w-full object-cover brightness-60 grayscale dark:brightness-40" />
      <CardHeader className={"text-center"}>
        <Avatar
          size={"xl"}
          className={
            "z-50 mx-auto -translate-y-16 border-2 border-gray-300 font-bold"
          }
        >
          <AvatarFallback className={"text-primary"}>
            {store.storeNumber}
          </AvatarFallback>
        </Avatar>
        <CardTitle className={"-translate-y-12 text-xl"}>
          Winkel {store.storeNumber}
        </CardTitle>
        <CardDescription className={"-translate-y-12"}>
          {store.address}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <Item variant={"outline"} className={"md:col-span-1 col-span-2"}>
            <ItemContent>
              <ItemTitle>Aantal medewerkers</ItemTitle>
              <ItemDescription>150</ItemDescription>
            </ItemContent>
          </Item>

          <Item variant={"outline"} className={"col-span-2 md:col-span-1"}>
            <ItemContent>
              <ItemTitle>Aantal openstaande shifts</ItemTitle>
              <ItemDescription>12</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Link href={"#"}>
                <Button variant={"outline"} size={"default"}>
                  Bekijk <ChevronRight />
                </Button>
              </Link>
            </ItemActions>
          </Item>

          <StoreManagerList />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-row items-center text-gray-600 italic">
          <Locate className={"size-4"} />
          <p className={"ml-2 text-xs"}>
            {store.lat},{store.lon}
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}