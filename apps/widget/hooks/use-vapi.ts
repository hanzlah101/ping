import { useEffect, useState } from "react"
import Vapi from "@vapi-ai/web"

type TranscriptMessage = {
  text: string
  role: "user" | "assistant"
}

type ConnectionStatus =
  | "idle"
  | "connecting"
  | "connected"
  | "speaking"
  | "error"

export function useVapi() {
  const [vapi, setVapi] = useState<Vapi | null>(null)
  const [status, setStatus] = useState<ConnectionStatus>("idle")
  const [transcript, setTranscript] = useState<TranscriptMessage[]>([])

  useEffect(() => {
    const vapiInstance = new Vapi("21d93f87-317a-480a-ba86-62284d0336e2")
    setVapi(vapiInstance)

    vapiInstance.on("call-start", () => {
      setStatus("connected")
      setTranscript([])
    })

    vapiInstance.on("call-end", () => {
      setStatus("idle")
    })

    vapiInstance.on("speech-start", () => {
      setStatus("speaking")
    })

    vapiInstance.on("speech-end", () => {
      setStatus((prev) => (prev === "speaking" ? "connected" : prev))
    })

    vapiInstance.on("error", () => {
      setStatus("error")
    })

    vapiInstance.on("message", (message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        setTranscript((prev) => [
          ...prev,
          {
            text: message.transcript,
            role: message.role === "user" ? "user" : "assistant"
          }
        ])
      }
    })

    return () => {
      vapiInstance.stop()
    }
  }, [])

  function startCall() {
    setStatus("connecting")
    if (vapi) vapi.start("583f44c1-78cd-4d86-ad8b-3fc7fcb4a052")
  }

  function endCall() {
    setStatus("idle")
    if (vapi) vapi.stop()
  }

  return {
    vapi,
    transcript,
    startCall,
    endCall,
    status,
    isConnecting: status === "connecting",
    isConnected: status === "connected",
    isSpeaking: status === "speaking",
    isError: status === "error"
  }
}
