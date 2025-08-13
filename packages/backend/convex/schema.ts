import { defineSchema } from "convex/server"
import { defineTable } from "convex/server"
import { v } from "convex/values"

export const contactSessionPublicSchema = {
  name: v.string(),
  email: v.string(),
  organizationId: v.string(),
  metadata: v.optional(
    v.object({
      userAgent: v.optional(v.string()),
      language: v.optional(v.string()),
      languages: v.optional(v.string()),
      platform: v.optional(v.string()),
      vendor: v.optional(v.string()),
      screenResolution: v.optional(v.string()),
      viewPortSize: v.optional(v.string()),
      timezone: v.optional(v.string()),
      timezoneOffset: v.optional(v.number()),
      cookieEnabled: v.optional(v.boolean()),
      referrer: v.optional(v.string()),
      currentUrl: v.optional(v.string())
    })
  )
}

export default defineSchema({
  contactSessions: defineTable({
    ...contactSessionPublicSchema,
    expiresAt: v.number()
  })
    .index("by_organization_id", ["organizationId"])
    .index("by_expires_at", ["expiresAt"])
})
