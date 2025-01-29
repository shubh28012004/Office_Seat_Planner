import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentAllocations() {
  const allocations = [
    { employee: "John Doe", office: "New York", date: "2023-03-15" },
    { employee: "Jane Smith", office: "San Francisco", date: "2023-03-14" },
    { employee: "Mike Johnson", office: "London", date: "2023-03-13" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Allocations</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {allocations.map((allocation, index) => (
            <li key={index} className="flex items-center justify-between">
              <span className="font-medium">{allocation.employee}</span>
              <span className="text-sm text-muted-foreground">{allocation.office}</span>
              <span className="text-sm text-muted-foreground">{allocation.date}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

