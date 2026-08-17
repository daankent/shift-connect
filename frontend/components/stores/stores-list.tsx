"use client"
import { Store } from "@/app/(app)/(employee)/stores/page"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import StoreItem from "@/components/stores/stores-item"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { useRef, useState } from "react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default  function StoresList({ stores }: { stores: Store[] }) {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const listTopRef = useRef<HTMLDivElement>(null)

  const sortedStores = [...stores].sort((a, b) => {
    return sortOrder === "asc"
      ? Number(a.storeNumber) - Number(b.storeNumber)
      : Number(b.storeNumber) - Number(a.storeNumber)
  })

  const filteredStores = sortedStores.filter((store) =>
    store.storeNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortOptions = [
    { label: "Winkelnummer (laagste eerst)", value: "asc", default: true },
    { label: "Winkelnummer (hoogste eerst)", value: "desc", default: false },
  ]

  function handleSortOrderChange(value: "asc" | "desc" | null) {
    if (!value) return

    setSortOrder(value)
    listTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      <div className="sticky top-30 z-10 mb-8 bg-background py-4">
        <FieldGroup className={"grid grid-cols-1 gap-2 md:flex md:flex-row"}>
          <Field className={"md:max-w-100"}>
            <FieldLabel>Zoeken</FieldLabel>
            <InputGroup>
              <InputGroupInput
                placeholder="typ om te zoeken..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">
                {filteredStores.length} resultaten
              </InputGroupAddon>
              {searchTerm !== "" && (
                <InputGroupAddon
                  align="inline-end"
                  title="Wis zoekopdracht"
                  onClick={() => setSearchTerm("")}
                >
                  <Button variant={"outline"} size={"icon-sm"}>
                    <X />
                  </Button>
                </InputGroupAddon>
              )}
            </InputGroup>
            <FieldDescription>
              Zoek op winkelnummer of adres.
            </FieldDescription>
          </Field>

          <Field className={"md:max-w-100"}>
            <FieldLabel>Sorteer op:</FieldLabel>
            <Select
              items={sortOptions}
              value={sortOrder}
              onValueChange={(value: "asc" | "desc" | null) =>
                handleSortOrderChange(value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Sorteer op" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
      </div>

      <div ref={listTopRef} className="scroll-mt-78 md:scroll-mt-64" />

      {filteredStores.map((store) => (
        <StoreItem store={store} key={store.storeNumber} />
      ))}
    </>
  )
}
