"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export function SeatMap({ officeId }: { officeId: string }) {
  const [seats, setSeats] = useState(generateSeats())

  function generateSeats() {
    // This is a simplified seat generation. In a real application, you would fetch this data from an API.
    return Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      status: Math.random() > 0.3 ? "occupied" : "available",
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Seat Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-10 gap-2">
          {seats.map((seat) => (
            <div
              key={seat.id}
              className={`h-8 w-8 rounded-sm ${seat.status === "occupied" ? "bg-primary" : "bg-secondary"}`}
              title={`Seat ${seat.id}: ${seat.status}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

