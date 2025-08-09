import { ThemeProvider } from "@ping/ui/providers/theme-provider"
import { Toaster } from "@ping/ui/components/sonner"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Toaster />
      {children}
    </ThemeProvider>
  )
}
