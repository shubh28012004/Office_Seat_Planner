import { OfficeHeader } from "@/components/office-header"
import { SeatMap } from "@/components/seat-map"
import { TeamAllocation } from "@/components/team-allocation"

export default function OfficePage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-6">
      <OfficeHeader officeId={params.id} />
      <div className="grid gap-6 md:grid-cols-2">
        <SeatMap officeId={params.id} />
        <TeamAllocation officeId={params.id} />
      </div>
    </div>
  )
}

