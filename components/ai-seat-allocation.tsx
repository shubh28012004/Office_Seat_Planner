"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export function AISeatAllocation() {
  const [preferences, setPreferences] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    setResult(null)

    // Simulating AI-based seat allocation
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const aiResponse = generateAIResponse(preferences)
    setResult(aiResponse)

    toast({
      title: "AI Seat Allocation",
      description: "Your ideal seat has been calculated based on your preferences.",
    })

    setIsLoading(false)
  }

  const generateAIResponse = (prefs: string) => {
    const keywords = {
      window: ["by the window", "natural light", "view"],
      quiet: ["quiet area", "focus", "concentration"],
      collaborative: ["near team", "collaborative space", "open area"],
      private: ["private", "secluded", "away from traffic"],
    }

    let response = "Based on your preferences, we recommend:\n\n"

    if (keywords.window.some((kw) => prefs.toLowerCase().includes(kw))) {
      response += "- A seat by the window on the east side of Floor 2\n"
    }
    if (keywords.quiet.some((kw) => prefs.toLowerCase().includes(kw))) {
      response += "- A quiet corner spot on Floor 3, away from high-traffic areas\n"
    }
    if (keywords.collaborative.some((kw) => prefs.toLowerCase().includes(kw))) {
      response += "- A seat in the open collaborative area on Floor 1\n"
    }
    if (keywords.private.some((kw) => prefs.toLowerCase().includes(kw))) {
      response += "- A secluded desk in the back of Floor 2, near the small meeting rooms\n"
    }

    response +=
      "\nSeat: " + String.fromCharCode(65 + Math.floor(Math.random() * 6)) + (Math.floor(Math.random() * 20) + 1)
    response += "\nFloor: " + (Math.floor(Math.random() * 3) + 1)

    return response
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Powered Seat Allocation</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="preferences">Your Seating Preferences</Label>
            <Textarea
              id="preferences"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              placeholder="Describe your ideal seating arrangement (e.g., near window, quiet area, close to team members)"
              className="min-h-[100px]"
            />
          </div>
          {result && (
            <div className="p-4 bg-muted rounded-md">
              <pre className="whitespace-pre-wrap">{result}</pre>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Calculating...
              </>
            ) : (
              "Find My Ideal Seat"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

