"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import type React from "react"

export function SeatAllocationForm() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission
  }

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle>Allocate Seat</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="employee">Employee</Label>
            <Input id="employee" placeholder="Enter employee name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="office">Office</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select office" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="san-francisco">San Francisco</SelectItem>
                <SelectItem value="london">London</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="team">Team</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select team" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="hr">HR</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="start-date">Start Date</Label>
            <Input id="start-date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="preferences">Seating Preferences</Label>
            <Textarea
              id="preferences"
              placeholder="Enter any seating preferences (e.g., near window, quiet area, etc.)"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Allocate Seat
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

