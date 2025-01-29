"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AdminDashboard() {
  const handleImport = () => {
    // Implement import logic
    console.log("Importing data...")
  }

  const handleExport = () => {
    // Implement export logic
    console.log("Exporting data...")
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Employees</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">3,000</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Seats</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">3,500</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Occupancy Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">85.7%</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Data Management</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
          <Button onClick={handleImport}>Import</Button>
          <Button onClick={handleExport}>Export</Button>
        </CardContent>
      </Card>
    </div>
  )
}

