import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

const AUTH_ROUTES = ["/sign-in(.*)", "/sign-up(.*)"]

const isPublicRoute = createRouteMatcher(AUTH_ROUTES)
const isOrgFreeRoute = createRouteMatcher([...AUTH_ROUTES, "/create-org(.*)"])

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect()
  }

  const { userId, orgId } = await auth()
  if (userId && !orgId && !isOrgFreeRoute(req)) {
    const searchParams = new URLSearchParams({ redirect_url: req.url })
    return NextResponse.redirect(
      new URL(`/create-org?${searchParams.toString()}`, req.url)
    )
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)"
  ]
}
