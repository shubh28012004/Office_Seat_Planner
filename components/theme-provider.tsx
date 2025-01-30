"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ProgressiveThemeProvider>{children}</ProgressiveThemeProvider>
    </NextThemesProvider>
  )
}

const ProgressiveThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [hue, setHue] = React.useState(200) // Default hue
  const [saturation, setSaturation] = React.useState(100) // Default saturation

  React.useEffect(() => {
    const updateTheme = () => {
      const newHue = (hue + 1) % 360
      setHue(newHue)
      document.documentElement.style.setProperty("--theme-hue", newHue.toString())
    }

    const interval = setInterval(updateTheme, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [hue])

  React.useEffect(() => {
    document.documentElement.style.setProperty("--theme-hue", hue.toString())
    document.documentElement.style.setProperty("--theme-saturation", `${saturation}%`)
  }, [hue, saturation])

  return <>{children}</>
}

