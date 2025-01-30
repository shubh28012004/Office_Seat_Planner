"use client"

import { useState } from "react"
import { useDrag, useDrop, DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Coffee, Printer, Tv, DoorOpen, Users, AppWindowIcon as Window } from "lucide-react"

interface Position {
  x: number
  y: number
}

interface Seat {
  id: number
  position: Position
  isOccupied: boolean
  employee?: string
  department?: string
  type: "desk" | "meeting" | "amenity"
  amenityType?: "coffee" | "printer" | "tv" | "door"
}

interface DraggableSeatProps {
  seat: Seat
  onDrop?: (fromId: number, toId: number) => void
}

const DraggableSeat: React.FC<DraggableSeatProps> = ({ seat, onDrop }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "seat",
    item: { id: seat.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    canDrag: seat.type === "desk",
  }))

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "seat",
    drop: (item: { id: number }) => {
      if (onDrop) onDrop(item.id, seat.id)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    canDrop: seat.type === "desk",
  }))

  const getAmenityIcon = (type: string) => {
    switch (type) {
      case "coffee":
        return <Coffee className="h-6 w-6" />
      case "printer":
        return <Printer className="h-6 w-6" />
      case "tv":
        return <Tv className="h-6 w-6" />
      case "door":
        return <DoorOpen className="h-6 w-6" />
      default:
        return null
    }
  }

  const getSeatContent = () => {
    if (seat.type === "amenity") {
      return getAmenityIcon(seat.amenityType!)
    }
    if (seat.type === "meeting") {
      return <Users className="h-6 w-6" />
    }
    return seat.isOccupied ? seat.employee?.[0] || "O" : seat.id
  }

  const getSeatStyle = () => {
    if (seat.type === "amenity") return "bg-secondary text-secondary-foreground"
    if (seat.type === "meeting") return "bg-accent text-accent-foreground"
    return seat.isOccupied ? "bg-primary text-primary-foreground" : "bg-secondary"
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            ref={(node) => drag(drop(node))}
            className={`
              h-12 w-12 rounded-md flex items-center justify-center cursor-move
              ${getSeatStyle()}
              ${isDragging ? "opacity-50" : ""}
              ${isOver ? "ring-2 ring-primary" : ""}
            `}
            style={{
              position: "absolute",
              left: `${seat.position.x}rem`,
              top: `${seat.position.y}rem`,
            }}
          >
            {getSeatContent()}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          {seat.type === "desk" && (
            <>
              {seat.isOccupied ? (
                <>
                  <p>{seat.employee}</p>
                  <Badge variant="outline">{seat.department}</Badge>
                </>
              ) : (
                <p>Empty Seat {seat.id}</p>
              )}
            </>
          )}
          {seat.type === "meeting" && <p>Meeting Room</p>}
          {seat.type === "amenity" && <p>{seat.amenityType}</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function SeatingChart() {
  const [currentFloor, setCurrentFloor] = useState(1)
  const [seats, setSeats] = useState<Seat[]>([
    // Main work area
    ...Array.from({ length: 24 }, (_, i) => ({
      id: i + 1,
      position: { x: 2 + (i % 6) * 4, y: 8 + Math.floor(i / 6) * 4 },
      isOccupied: Math.random() > 0.3,
      employee: Math.random() > 0.3 ? `Employee ${i + 1}` : undefined,
      department: ["Engineering", "Sales", "Marketing", "HR"][Math.floor(Math.random() * 4)],
      type: "desk",
    })),
    // Meeting rooms
    {
      id: 100,
      position: { x: 28, y: 8 },
      isOccupied: true,
      type: "meeting",
    },
    {
      id: 101,
      position: { x: 28, y: 16 },
      isOccupied: true,
      type: "meeting",
    },
    // Amenities
    {
      id: 201,
      position: { x: 2, y: 2 },
      isOccupied: true,
      type: "amenity",
      amenityType: "coffee",
    },
    {
      id: 202,
      position: { x: 8, y: 2 },
      isOccupied: true,
      type: "amenity",
      amenityType: "printer",
    },
    {
      id: 203,
      position: { x: 14, y: 2 },
      isOccupied: true,
      type: "amenity",
      amenityType: "tv",
    },
    {
      id: 204,
      position: { x: 20, y: 2 },
      isOccupied: true,
      type: "amenity",
      amenityType: "door",
    },
  ])

  const handleSeatDrop = (fromId: number, toId: number) => {
    setSeats((prevSeats) => {
      const fromSeat = prevSeats.find((s) => s.id === fromId)
      const toSeat = prevSeats.find((s) => s.id === toId)

      if (!fromSeat || !toSeat) return prevSeats

      return prevSeats.map((seat) => {
        if (seat.id === fromId) {
          return { ...seat, isOccupied: false, employee: undefined, department: undefined }
        }
        if (seat.id === toId) {
          return { ...seat, isOccupied: true, employee: fromSeat.employee, department: fromSeat.department }
        }
        return seat
      })
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Interactive Office Seating Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Label htmlFor="floor-select">Select Floor</Label>
          <Select value={currentFloor.toString()} onValueChange={(value) => setCurrentFloor(Number(value))}>
            <SelectTrigger id="floor-select">
              <SelectValue placeholder="Select floor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Floor 1</SelectItem>
              <SelectItem value="2">Floor 2</SelectItem>
              <SelectItem value="3">Floor 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DndProvider backend={HTML5Backend}>
          <div className="relative border rounded-lg p-4" style={{ height: "600px" }}>
            {/* Windows */}
            <div className="absolute inset-x-0 top-0 h-2 bg-blue-200 opacity-50 flex items-center justify-center">
              <Window className="h-4 w-4 text-blue-500" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-2 bg-blue-200 opacity-50 flex items-center justify-center">
              <Window className="h-4 w-4 text-blue-500" />
            </div>
            <div className="absolute inset-y-0 left-0 w-2 bg-blue-200 opacity-50 flex items-center justify-center">
              <Window className="h-4 w-4 text-blue-500" />
            </div>
            <div className="absolute inset-y-0 right-0 w-2 bg-blue-200 opacity-50 flex items-center justify-center">
              <Window className="h-4 w-4 text-blue-500" />
            </div>

            {/* Legend */}
            <div className="absolute top-4 right-4 bg-background/80 p-2 rounded-lg space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-primary rounded" />
                <span className="text-sm">Occupied</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-secondary rounded" />
                <span className="text-sm">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-accent rounded" />
                <span className="text-sm">Meeting Room</span>
              </div>
            </div>

            {seats.map((seat) => (
              <DraggableSeat key={seat.id} seat={seat} onDrop={handleSeatDrop} />
            ))}
          </div>
        </DndProvider>
      </CardContent>
    </Card>
  )
}

