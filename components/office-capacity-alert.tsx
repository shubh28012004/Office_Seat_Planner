import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface OfficeCapacityAlertProps {
  office: string
  capacity: number
  occupied: number
}

export function OfficeCapacityAlert({ office, capacity, occupied }: OfficeCapacityAlertProps) {
  const occupancyRate = (occupied / capacity) * 100

  if (occupancyRate < 90) return null

  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>High Occupancy Alert</AlertTitle>
      <AlertDescription>
        {office} office is at {occupancyRate.toFixed(1)}% capacity. Consider reallocating seats or expanding the office.
      </AlertDescription>
    </Alert>
  )
}

