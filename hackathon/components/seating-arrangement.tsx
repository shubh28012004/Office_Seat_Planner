"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Seat = {
  id: number
  occupied: boolean
  employee?: string
}

export function SeatingArrangement() {
  const [seats, setSeats] = useState<Seat[]>(Array.from({ length: 50 }, (_, i) => ({ id: i + 1, occupied: false })))
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null)
  const [employeeName, setEmployeeName] = useState("")

  const handleSeatClick = (id: number) => {
    setSelectedSeat(id)
    setEmployeeName(seats.find((seat) => seat.id === id)?.employee || "")
  }

  const handleAssignSeat = () => {
    if (selectedSeat !== null) {
      setSeats(
        seats.map((seat) => (seat.id === selectedSeat ? { ...seat, occupied: true, employee: employeeName } : seat)),
      )
      setSelectedSeat(null)
      setEmployeeName("")
    }
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-10 gap-2">
            {seats.map((seat) => (
              <Button
                key={seat.id}
                variant={seat.occupied ? "default" : "outline"}
                className={`h-12 w-12 ${selectedSeat === seat.id ? "ring-2 ring-primary" : ""}`}
                onClick={() => handleSeatClick(seat.id)}
              >
                {seat.id}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="space-y-2">
            <Label htmlFor="employee-name">Employee Name</Label>
            <Input
              id="employee-name"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              placeholder="Enter employee name"
            />
            <Button onClick={handleAssignSeat} disabled={!selectedSeat || !employeeName}>
              Assign Seat
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

