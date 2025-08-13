import { cn } from "@ping/ui/lib/utils"

type WidgetHeaderProps = {
  description: string
  className?: string
}

export function WidgetHeader({ description, className }: WidgetHeaderProps) {
  return (
    <header
      className={cn(
        "text-primary-foreground via-primary flex flex-col justify-between gap-y-1 bg-gradient-to-t from-violet-700 to-violet-500 px-6 py-10",
        className
      )}
    >
      <p className="text-3xl font-bold">Hi There 👋🏻</p>
      <p className="text-lg font-semibold">{description}</p>
    </header>
  )
}
