import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function OfficeHeader({ officeId }: { officeId: string }) {
  // In a real application, you would fetch the office details based on the officeId
  const officeName = "New York Office"

  return (
    <div className="flex items-center justify-between pb-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">{officeName}</h1>
      </div>
      <Button>Manage Seats</Button>
    </div>
  )
}

