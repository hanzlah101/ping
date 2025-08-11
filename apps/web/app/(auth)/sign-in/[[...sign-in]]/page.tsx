import { type Metadata } from "next"
import { SignIn } from "@clerk/nextjs"

export const metadata: Metadata = {
  title: "Login - Ping",
  description: "Login to your Ping account",
  keywords: ["login", "ping", "authentication"]
}

export default function SignInPage() {
  return <SignIn />
}
