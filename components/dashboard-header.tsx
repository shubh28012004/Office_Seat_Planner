import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between pb-6">
      <h1 className="text-3xl font-bold">Seat Allocation Dashboard</h1>
      <Button>
        <PlusCircle className="mr-2 h-4 w-4" />
        Allocate Seat
      </Button>
    </div>
  )
}

