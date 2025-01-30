"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

export function AddOfficeForm() {
  const [officeName, setOfficeName] = useState("")
  const [capacity, setCapacity] = useState("")
  const [floors, setFloors] = useState("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!officeName || !capacity || !floors) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      })
      return
    }
    // Here you would typically send this data to your backend
    console.log({ officeName, capacity: Number.parseInt(capacity), floors: Number.parseInt(floors) })
    toast({
      title: "Success",
      description: "Office added successfully!",
    })
    // Reset form
    setOfficeName("")
    setCapacity("")
    setFloors("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Office</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="office-name">Office Name</Label>
            <Input
              id="office-name"
              value={officeName}
              onChange={(e) => setOfficeName(e.target.value)}
              placeholder="Enter office name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="capacity">Capacity</Label>
            <Input
              id="capacity"
              type="number"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              placeholder="Enter total capacity"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="floors">Number of Floors</Label>
            <Input
              id="floors"
              type="number"
              value={floors}
              onChange={(e) => setFloors(e.target.value)}
              placeholder="Enter number of floors"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Add Office
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

