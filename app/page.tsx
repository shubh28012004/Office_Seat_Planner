"use client"

import { useAuth } from "@/contexts/auth-context"
import { DashboardHeader } from "@/components/dashboard-header"
import { OfficeOverview } from "@/components/office-overview"
import { RecentAllocations } from "@/components/recent-allocations"
import { UtilizationChart } from "@/components/utilization-chart"
import { SeatingChart } from "@/components/seating-chart"
import { OfficeCapacityAlert } from "@/components/office-capacity-alert"
import { AdminDashboard } from "@/components/admin-dashboard"
import { AISeatAllocation } from "@/components/ai-seat-allocation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LoginForm } from "@/components/login-form"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export default function DashboardPage() {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="min-h-screen">
        <section className="h-screen relative flex flex-col items-center justify-center bg-gradient-to-b from-primary to-primary-foreground text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Modern office space"
              layout="fill"
              objectFit="cover"
              className="opacity-20"
            />
          </div>
          <div className="z-10 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to SeatSmart</h1>
            <p className="text-xl mb-8">Intelligent Seat Allocation for Modern Workplaces</p>
            <LoginForm />
            <Button
              variant="outline"
              className="mt-8"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            >
              Learn More <ArrowDown className="ml-2" />
            </Button>
          </div>
        </section>

        <section className="min-h-screen bg-background p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="relative overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="AI-powered allocation"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle>AI-Powered Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our advanced AI algorithm considers your preferences and optimizes seating arrangements for maximum
                  productivity and satisfaction.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Interactive floor plans"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Interactive Floor Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Visualize your office layout with our interactive floor plans. Easily view and manage seat assignments
                  across multiple floors.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Flexible management"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Flexible Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Admins can easily oversee and adjust seating arrangements, while employees can input preferences for
                  optimal workspace allocation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <DashboardHeader />
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Welcome, {user.name}!</CardTitle>
        </CardHeader>
        <CardContent>
          <p>You are logged in as an {user.role}. Here's your personalized dashboard.</p>
        </CardContent>
      </Card>

      {user.role === "admin" && (
        <>
          <OfficeCapacityAlert office="New York" capacity={1000} occupied={950} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
            <OfficeOverview />
            <UtilizationChart />
            <RecentAllocations />
          </div>
          <AdminDashboard />
        </>
      )}

      {user.role === "employee" && (
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <AISeatAllocation />
        </div>
      )}

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Interactive Office Seating Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <SeatingChart />
        </CardContent>
      </Card>
    </div>
  )
}

