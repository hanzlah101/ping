"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import {
  CreditCardIcon,
  InboxIcon,
  LayoutDashboardIcon,
  LibraryBigIcon,
  MicIcon,
  PaletteIcon
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from "@ping/ui/components/sidebar"

const customerSupportItems = [
  {
    title: "Conversations",
    url: "/conversations",
    icon: InboxIcon
  },
  {
    title: "Knowledge Base",
    url: "/files",
    icon: LibraryBigIcon
  }
]

const configurationItems = [
  {
    title: "Widget Customization",
    url: "/customization",
    icon: PaletteIcon
  },

  {
    title: "Integrations",
    url: "/integrations",
    icon: LayoutDashboardIcon
  },
  {
    title: "Voice Assistant",
    url: "/plugins/vapi",
    icon: MicIcon
  }
]

export function DashboardSidebar() {
  const pathname = usePathname()
  function isActive(url: string) {
    return url === "/" ? pathname === url : pathname.startsWith(url)
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="h-9">
            <OrganizationSwitcher
              hidePersonal
              skipInvitationScreen
              appearance={{
                elements: {
                  rootBox: "!w-full !h-9",
                  avatarBox: "!size-5",
                  organizationSwitcherTrigger:
                    "!w-full !p-2 !justify-between hover:!bg-sidebar-accent hover:!text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8",
                  organizationSwitcherTrigger__open:
                    "!bg-sidebar-accent !text-sidebar-accent-foreground",
                  organizationPreview:
                    "group-data-[collapsible=icon]:!justify-center group-data-[collapsible=icon]:!gap-2",
                  organizationPreviewTextContainer:
                    "group-data-[collapsible=icon]:!hidden !text-sm !font-medium !text-sidebar-foreground !truncate",
                  organizationSwitcherTriggerIcon:
                    "group-data-[collapsible=icon]:!hidden"
                }
              }}
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* Cutomer Support */}
        <SidebarGroup>
          <SidebarGroupLabel>Customer Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {customerSupportItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={isActive(item.url)}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Configuration */}
        <SidebarGroup>
          <SidebarGroupLabel>Configuration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {configurationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={isActive(item.url)}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Account */}
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip={"Plans & Billing"}
                  isActive={pathname.startsWith("/billing")}
                >
                  <Link href="/billing">
                    <CreditCardIcon />
                    Plans & Billing
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="h-9">
            <UserButton
              showName
              appearance={{
                elements: {
                  rootBox: "!w-full !h-9",
                  avatarBox: "!size-5",
                  userButtonTrigger:
                    "!w-full !p-2 !ring-0 hover:!bg-sidebar-accent hover:!text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8",
                  userButtonTrigger__open:
                    "!bg-sidebar-accent !text-sidebar-accent-foreground",
                  userButtonBox:
                    "!w-full !text-sidebar-foreground !flex-row-reverse !justify-end !gap-2 group-data-[collapsible=icon]:!justify-center",
                  userButtonOuterIdentifier:
                    "!pl-0 group-data-[collapsible=icon]:!hidden !truncate"
                }
              }}
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
