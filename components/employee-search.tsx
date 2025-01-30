"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react"

interface Employee {
  id: number
  name: string
  office: string
  team: string
  seat: string
}

const mockEmployees: Employee[] = [
  { id: 1, name: "John Doe", office: "New York", team: "Engineering", seat: "A1" },
  { id: 2, name: "Jane Smith", office: "San Francisco", team: "Marketing", seat: "B3" },
  { id: 3, name: "Bob Johnson", office: "London", team: "Sales", seat: "C2" },
]

export function EmployeeSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<Employee[]>([])

  const handleSearch = () => {
    const results = mockEmployees.filter((employee) => employee.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setSearchResults(results)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Employee Search</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button onClick={handleSearch}>
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
        {searchResults.length > 0 && (
          <ul className="mt-4 space-y-2">
            {searchResults.map((employee) => (
              <li key={employee.id} className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">{employee.name}</span>
                <span className="text-sm text-muted-foreground">
                  {employee.office} - {employee.team} - Seat {employee.seat}
                </span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

