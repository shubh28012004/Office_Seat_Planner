"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Mon", utilization: 85 },
  { name: "Tue", utilization: 90 },
  { name: "Wed", utilization: 92 },
  { name: "Thu", utilization: 88 },
  { name: "Fri", utilization: 80 },
]

export function UtilizationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Seat Utilization</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="utilization" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

