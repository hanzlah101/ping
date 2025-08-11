import { type ReactNode } from "react"
import { cookies } from "next/headers"
import { AuthGuard } from "@/components/auth-guard"
import { DashboardSidebar } from "./_components/dashboard-sidebar"
import { SidebarProvider, SidebarInset } from "@ping/ui/components/sidebar"

export default async function DashboardLayout({
  children
}: {
  children: ReactNode
}) {
  const cookieStore = await cookies()
  const sidebarState = cookieStore.get("sidebar_state")?.value
  const defaultOpen = sidebarState === undefined || sidebarState === "true"

  return (
    <AuthGuard>
      <SidebarProvider defaultOpen={defaultOpen}>
        <DashboardSidebar />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </AuthGuard>
  )
}
