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
import { Field, FieldLabel } from "@/components/ui/field"
import { useRef, useState } from "react"

export default function StoresList({ stores }: { stores: Store[] }) {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const listTopRef = useRef<HTMLDivElement>(null)

  const sortedStores = [...stores].sort((a, b) => {
    return sortOrder === "asc"
      ? Number(a.storeNumber) - Number(b.storeNumber)
      : Number(b.storeNumber) - Number(a.storeNumber)
  })

  const sortOptions = [
    { label: "Winkelnummer (laagste eerst)", value: "asc", default: true },
    { label: "Winkelnummer (hoogste eerst)", value: "desc", default: false },
  ]

  function handleSortOrderChange(value: "asc" | "desc" | null) {
    if (!value) return;

    setSortOrder(value)
    listTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      <div className="sticky top-30 z-10 mb-8 bg-background py-4">
        <Field className={"max-w-100"}>
          <FieldLabel>Sorteer op:</FieldLabel>
          <Select
            items={sortOptions}
            value={sortOrder}
            onValueChange={(value: "asc" | "desc" | null) => handleSortOrderChange(value)}
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
      </div>

      <div ref={listTopRef} className="scroll-mt-52" />

      {sortedStores.map((store) => (
        <StoreItem store={store} key={store.storeNumber} />
      ))}
    </>
  )
}
