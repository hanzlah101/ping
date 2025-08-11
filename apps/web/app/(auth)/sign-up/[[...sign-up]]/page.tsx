import { type Metadata } from "next"
import { SignUp } from "@clerk/nextjs"

export const metadata: Metadata = {
  title: "Sign Up - Ping",
  description: "Create a new account on Ping",
  keywords: ["sign up", "ping", "authentication"]
}

export default function SignUpPage() {
  return <SignUp />
}
