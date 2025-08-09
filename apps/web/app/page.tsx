"use client"

import { useMutation, useQuery } from "convex/react"
import { api } from "@ping/backend"
import { Button } from "@ping/ui/components/button"

const USERS_NAMES = [
  "John Doe",
  "Jane Smith",
  "Alice Johnson",
  "Bob Brown",
  "Charlie Davis",
  "David Wilson",
  "Emma Thompson",
  "Franklin Harris",
  "Grace Lee",
  "Henry Walker",
  "Isabella Martinez",
  "Jack Wilson",
  "Liam Johnson",
  "Mia Brown",
  "Noah Davis"
]

export default function Page() {
  const users = useQuery(api.users.list)
  const createUser = useMutation(api.users.create)

  return (
    <div className="space-y-4 p-8">
      <Button
        onClick={() => {
          const randomUser =
            USERS_NAMES[Math.floor(Math.random() * USERS_NAMES.length)]
          createUser({ name: randomUser ?? "Unknown User" })
        }}
      >
        Create User
      </Button>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}
