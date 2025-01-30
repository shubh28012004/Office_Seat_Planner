"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { toast } from "@/components/ui/use-toast"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", seat: "A1", floor: 1 },
    { id: 2, name: "Jane Smith", seat: "B3", floor: 2 },
    { id: 3, name: "Bob Johnson", seat: "C2", floor: 1 },
  ])
  const [selectedEmployee, setSelectedEmployee] = useState<number | null>(null)
  const [newSeat, setNewSeat] = useState("")
  const [newFloor, setNewFloor] = useState("")

  const handleSearch = () => {
    toast({
      title: "Search Results",
      description: `Showing results for "${searchTerm}"`,
    })
  }

  const handleImport = () => {
    toast({
      title: "Import Successful",
      description: "Employee data has been imported.",
    })
  }

  const handleExport = () => {
    toast({
      title: "Export Successful",
      description: "Employee data has been exported.",
    })
  }

  const handleManualAllocation = () => {
    if (selectedEmployee && newSeat && newFloor) {
      setEmployees(
        employees.map((emp) =>
          emp.id === selectedEmployee ? { ...emp, seat: newSeat, floor: Number.parseInt(newFloor) } : emp,
        ),
      )
      toast({
        title: "Seat Reallocated",
        description: `Employee has been reallocated to seat ${newSeat} on floor ${newFloor}.`,
      })
      setSelectedEmployee(null)
      setNewSeat("")
      setNewFloor("")
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Employee Search and Seat Allocation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Input
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Current Seat</TableHead>
                <TableHead>Floor</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.seat}</TableCell>
                  <TableCell>{employee.floor}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button onClick={() => setSelectedEmployee(employee.id)}>Reallocate</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Reallocate {employee.name}</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="new-seat" className="text-right">
                              New Seat
                            </Label>
                            <Input
                              id="new-seat"
                              value={newSeat}
                              onChange={(e) => setNewSeat(e.target.value)}
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="new-floor" className="text-right">
                              New Floor
                            </Label>
                            <Select onValueChange={setNewFloor} value={newFloor}>
                              <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select floor" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">Floor 1</SelectItem>
                                <SelectItem value="2">Floor 2</SelectItem>
                                <SelectItem value="3">Floor 3</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button onClick={handleManualAllocation}>Confirm Reallocation</Button>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Data Management</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
          <Button onClick={handleImport}>Import Employee Data</Button>
          <Button onClick={handleExport}>Export Employee Data</Button>
        </CardContent>
      </Card>
    </div>
  )
}

