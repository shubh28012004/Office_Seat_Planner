"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function OfficeSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Office" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="new-york">New York</SelectItem>
        <SelectItem value="san-francisco">San Francisco</SelectItem>
        <SelectItem value="london">London</SelectItem>
      </SelectContent>
    </Select>
  )
}

