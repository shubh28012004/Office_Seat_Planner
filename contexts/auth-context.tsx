"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type User = {
  id: string
  name: string
  role: "admin" | "employee"
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string) => {
    // This is a mock login. In a real app, you'd validate against a backend.
    if (email === "admin@example.com" && password === "admin123") {
      const adminUser: User = { id: "1", name: "Admin User", role: "admin" }
      setUser(adminUser)
      localStorage.setItem("user", JSON.stringify(adminUser))
    } else if (email === "employee@example.com" && password === "employee123") {
      const employeeUser: User = { id: "2", name: "Employee User", role: "employee" }
      setUser(employeeUser)
      localStorage.setItem("user", JSON.stringify(employeeUser))
    } else {
      throw new Error("Invalid credentials")
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

