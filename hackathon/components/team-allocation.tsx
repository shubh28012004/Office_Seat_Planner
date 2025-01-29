import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TeamAllocation({ officeId }: { officeId: string }) {
  const teams = [
    { name: "Engineering", allocation: 40 },
    { name: "Sales", allocation: 25 },
    { name: "Marketing", allocation: 20 },
    { name: "HR", allocation: 10 },
    { name: "Finance", allocation: 5 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Allocation</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {teams.map((team) => (
            <li key={team.name} className="flex items-center justify-between">
              <span className="font-medium">{team.name}</span>
              <span className="text-sm text-muted-foreground">{team.allocation}%</span>
              <div className="h-2 w-24 rounded-full bg-secondary">
                <div className="h-2 rounded-full bg-primary" style={{ width: `${team.allocation}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

