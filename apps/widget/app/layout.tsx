import "@ping/ui/globals.css"

import { type Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { Providers } from "@ping/ui/providers"
import { ConvexClientProvider } from "@/components/convex-provider"

export const metadata: Metadata = {
  title: "Ping"
}

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans"
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <ConvexClientProvider>
          <Providers>{children}</Providers>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
