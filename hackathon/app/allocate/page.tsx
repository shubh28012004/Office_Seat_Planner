import { SeatAllocationForm } from "@/components/seat-allocation-form"

export default function AllocatePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-3xl font-bold">Allocate Seat</h1>
      <SeatAllocationForm />
    </div>
  )
}

