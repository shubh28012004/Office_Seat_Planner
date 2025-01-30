"use client"

import * as React from "react"
import { Moon, Sun, Palette } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Slider } from "@/components/ui/slider"

export function ThemeSwitcher() {
  const { setTheme } = useTheme()
  const [hue, setHue] = React.useState(200)
  const [saturation, setSaturation] = React.useState(100)

  const handleHueChange = (value: number[]) => {
    setHue(value[0])
    document.documentElement.style.setProperty("--theme-hue", value[0].toString())
  }

  const handleSaturationChange = (value: number[]) => {
    setSaturation(value[0])
    document.documentElement.style.setProperty("--theme-saturation", `${value[0]}%`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex flex-col space-y-2 w-full">
            <label className="text-sm font-medium">Hue</label>
            <Slider min={0} max={360} step={1} value={[hue]} onValueChange={handleHueChange} />
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex flex-col space-y-2 w-full">
            <label className="text-sm font-medium">Saturation</label>
            <Slider min={0} max={100} step={1} value={[saturation]} onValueChange={handleSaturationChange} />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

