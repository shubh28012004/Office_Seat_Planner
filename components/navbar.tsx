"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { OfficeSelect } from "@/components/office-select"
import { UserNav } from "@/components/user-nav"
import { useAuth } from "@/contexts/auth-context"

export function Navbar() {
  const pathname = usePathname()
  const { user, logout } = useAuth()

  return (
    <nav className="border-b">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-2xl font-bold">SeatSmart</span>
        </Link>
        <div className="flex flex-1 items-center space-x-4 md:space-x-6">
          <Link href="/" className={pathname === "/" ? "font-bold" : ""}>
            Dashboard
          </Link>
          {user?.role === "admin" && (
            <Link href="/admin" className={pathname === "/admin" ? "font-bold" : ""}>
              Admin
            </Link>
          )}
          {user?.role === "employee" && (
            <Link href="/allocate" className={pathname === "/allocate" ? "font-bold" : ""}>
              Allocate Seat
            </Link>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <OfficeSelect />
          <ThemeSwitcher />
          {user ? (
            <>
              <UserNav />
              <Button onClick={logout}>Logout</Button>
            </>
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

