"use client"

import { OrganizationList } from "@clerk/nextjs"
import { useSearchParams } from "next/navigation"

export function CreateOrg() {
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get("redirect_url")

  return (
    <OrganizationList
      hidePersonal
      skipInvitationScreen
      afterCreateOrganizationUrl={redirectUrl ?? "/"}
      afterSelectOrganizationUrl={redirectUrl ?? "/"}
    />
  )
}
