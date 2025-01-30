"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export function SeatAllocationForm() {
  const [employee, setEmployee] = useState("")
  const [office, setOffice] = useState("")
  const [team, setTeam] = useState("")
  const [startDate, setStartDate] = useState("")
  const [preferences, setPreferences] = useState("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!employee || !office || !team || !startDate) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }
    // Here you would typically send this data to your backend
    console.log({ employee, office, team, startDate, preferences })
    toast({
      title: "Success",
      description: "Seat allocated successfully!",
    })
    // Reset form
    setEmployee("")
    setOffice("")
    setTeam("")
    setStartDate("")
    setPreferences("")
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
            <Input
              id="employee"
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
              placeholder="Enter employee name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="office">Office</Label>
            <Select value={office} onValueChange={setOffice} required>
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
            <Select value={team} onValueChange={setTeam} required>
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
            <Input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="preferences">Seating Preferences</Label>
            <Textarea
              id="preferences"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
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

