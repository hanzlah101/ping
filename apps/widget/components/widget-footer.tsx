import { Button } from "@ping/ui/components/button"
import { cn } from "@ping/ui/lib/utils"
import { HomeIcon, InboxIcon } from "lucide-react"

export function WidgetFooter() {
  const screen: string = "selection"

  return (
    <footer className="justify-baseline bg-background flex items-center border-t">
      <Button
        className="h-14 flex-1 rounded-none"
        size="icon"
        variant="ghost"
        onClick={() => {}}
      >
        <HomeIcon
          className={cn("size-5", { "text-primary": screen === "selection" })}
        />
      </Button>
      <Button
        className="h-14 flex-1 rounded-none"
        size="icon"
        variant="ghost"
        onClick={() => {}}
      >
        <InboxIcon
          className={cn("size-5", { "text-primary": screen === "inbox" })}
        />
      </Button>
    </footer>
  )
}
