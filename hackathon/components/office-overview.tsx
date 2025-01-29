import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function OfficeOverview() {
  const offices = [
    { name: "New York", totalSeats: 1000, occupiedSeats: 850 },
    { name: "San Francisco", totalSeats: 800, occupiedSeats: 720 },
    { name: "London", totalSeats: 600, occupiedSeats: 540 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Office Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {offices.map((office) => (
            <div key={office.name} className="flex items-center justify-between">
              <span>{office.name}</span>
              <span className="text-sm text-muted-foreground">
                {office.occupiedSeats} / {office.totalSeats} seats
              </span>
              <div className="h-2 w-24 rounded-full bg-secondary">
                <div
                  className="h-2 rounded-full bg-primary"
                  style={{ width: `${(office.occupiedSeats / office.totalSeats) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

