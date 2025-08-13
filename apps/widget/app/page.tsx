"use client"

import { WidgetFooter } from "@/components/widget-footer"
import { WidgetHeader } from "@/components/widget-header"
import { useSearchParams } from "next/navigation"

export default function Home() {
  const searchParams = useSearchParams()
  const organizationId = searchParams.get("organization_id")

  return (
    <div className="bg-muted flex h-full min-h-svh flex-col overflow-hidden rounded-xl border">
      <WidgetHeader>
        <div className="flex flex-col justify-between gap-y-2 px-2 py-6">
          <p className="text-3xl font-semibold">Hi There 👋</p>
          <p className="text-lg font-medium">How can we assist you today?</p>
        </div>
      </WidgetHeader>
      <div className="flex h-full w-full flex-1 items-center justify-center">
        <p className="text-muted-foreground">
          {organizationId
            ? `Organization ID: ${organizationId}`
            : "No organization selected"}
        </p>
      </div>
      <WidgetFooter />
    </div>
  )
}
