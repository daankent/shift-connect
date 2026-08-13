import {
  Item,
  ItemContent,
  ItemTitle,
} from "@/components/ui/item"

import StoreManagerItem from "@/components/stores/store/store-manager-item"

export type Manager = {
  firstName: string
  lastName: string
  email: string
}

export default function StoreManagerList() {
  const managers: Manager[] = [
    {
      firstName: "Henk",
      lastName: "de Vries",
      email: "henk.devries@supermarkt.nl"
    },
    {
      firstName: "Marga",
      lastName: "Jansen",
      email: "marga.jansen@supermarkt.nl"
    },
    {
      firstName: "Co",
      lastName: "de Koper",
      email: "co.dekoper@supermarkt.nl"
    }
  ]
  return (
    <Item variant={"outline"} className={"col-span-2"}>
      <ItemContent>
        <ItemTitle>Managers</ItemTitle>
        {managers.map((manager, index) => (
          <StoreManagerItem key={index} manager={manager} />
        ))}
      </ItemContent>
    </Item>
  )
}