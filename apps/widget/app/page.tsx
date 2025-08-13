"use client"

import { WidgetAuth } from "@/components/widget-auth"
import { WidgetFooter } from "@/components/widget-footer"
import { WidgetHeader } from "@/components/widget-header"
import { useSearchParams } from "next/navigation"

export default function Home() {
  const searchParams = useSearchParams()
  const organizationId = searchParams.get("organization_id")

  return (
    <div className="bg-muted flex h-full min-h-svh flex-col overflow-hidden rounded-xl border">
      <WidgetAuth />

      {/* <WidgetHeader description="How can we assist you today?" />
      <div className="flex h-full w-full flex-1 items-center justify-center">
        <p className="text-muted-foreground">
          {organizationId
            ? `Organization ID: ${organizationId}`
            : "No organization selected"}
        </p>
      </div>
      <WidgetFooter /> */}
    </div>
  )
}
