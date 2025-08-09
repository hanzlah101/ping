import { ThemeProvider } from "@ping/ui/providers/theme-provider"
import { ConvexClientProvider } from "@ping/ui/providers/convex-provider"
import { Toaster } from "@ping/ui/components/sonner"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConvexClientProvider>
      <ThemeProvider>
        <Toaster />
        {children}
      </ThemeProvider>
    </ConvexClientProvider>
  )
}
