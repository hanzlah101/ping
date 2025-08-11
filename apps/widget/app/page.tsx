"use client"

import { useVapi } from "@/hooks/use-vapi"
import { Button } from "@ping/ui/components/button"

export default function Page() {
  const { status, transcript, startCall, endCall } = useVapi()

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 py-12">
      {status}

      <div className="flex items-center gap-4">
        <Button onClick={startCall}>Start Call</Button>
        <Button variant="destructive" onClick={endCall}>
          End Call
        </Button>
      </div>

      <div className="space-y-4">
        {transcript.map((msg, index) => (
          <div
            key={index}
            className={msg.role === "user" ? "text-blue-500" : "text-green-500"}
          >
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  )
}
