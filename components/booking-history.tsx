import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface BookingHistoryProps {
  employeeId: number
}

const mockBookingHistory = [
  { id: 1, seat: "A1", startDate: "2023-01-01", endDate: "2023-03-31" },
  { id: 2, seat: "B3", startDate: "2023-04-01", endDate: "2023-06-30" },
  { id: 3, seat: "C2", startDate: "2023-07-01", endDate: "2023-09-30" },
]

export function BookingHistory({ employeeId }: BookingHistoryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Seat</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockBookingHistory.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.seat}</TableCell>
                <TableCell>{booking.startDate}</TableCell>
                <TableCell>{booking.endDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

