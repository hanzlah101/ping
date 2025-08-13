import { cn } from "@ping/ui/lib/utils"

type WidgetHeaderProps = {
  children: React.ReactNode
  className?: string
}

export function WidgetHeader({ children, className }: WidgetHeaderProps) {
  return (
    <header
      className={cn(
        "text-primary-foreground via-primary bg-gradient-to-t from-violet-700 to-violet-500 p-4",
        className
      )}
    >
      {children}
    </header>
  )
}
