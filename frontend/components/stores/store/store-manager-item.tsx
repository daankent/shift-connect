import {
  Item,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Manager } from "@/components/stores/store/store-manager-list"


export default function StoreManagerItem({manager}: {manager: Manager}) {
  return (
    <Item variant={"outline"}>
      <ItemMedia>
        <Avatar>
          <AvatarFallback>{`${manager.firstName[0]}${manager.lastName[0]}`}</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemTitle>{`${manager.firstName} ${manager.lastName}`}</ItemTitle>
      <ItemDescription>{manager.email}</ItemDescription>
    </Item>
  )
}