"use client"

import { useEffect, type ReactNode } from "react"
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react"
import { useRouter } from "next/navigation"
import { useOrganization } from "@clerk/nextjs"

import { CreateOrg } from "./create-org"

export function AuthGuard({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthLoading>
        <Loading />
      </AuthLoading>
      <Authenticated>
        <OrganizationGuard>{children}</OrganizationGuard>
      </Authenticated>
      <Unauthenticated>
        <RedirectToSignIn />
      </Unauthenticated>
    </>
  )
}

function OrganizationGuard({ children }: { children: ReactNode }) {
  const { organization } = useOrganization()
  if (organization) return children
  return (
    <div className="flex min-h-svh w-full items-center justify-center py-12">
      <CreateOrg />
    </div>
  )
}

function RedirectToSignIn() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/sign-in")
  }, [router])

  return <Loading />
}

function Loading() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center">
      Loading...
    </div>
  )
}
