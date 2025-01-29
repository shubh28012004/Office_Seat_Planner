import { DashboardHeader } from "@/components/dashboard-header"
import { OfficeOverview } from "@/components/office-overview"
import { RecentAllocations } from "@/components/recent-allocations"
import { UtilizationChart } from "@/components/utilization-chart"

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6">
      <DashboardHeader />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <OfficeOverview />
        <UtilizationChart />
        <RecentAllocations />
      </div>
    </div>
  )
}

