import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="space-x-4 p-8">
      <UserButton />
      <OrganizationSwitcher hidePersonal />
    </div>
  )
}
