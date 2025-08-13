import { mutation } from "../_generated/server"
import { contactSessionPublicSchema } from "../schema"

const SESSION_DURATION = 2 * 24 * 60 * 60 * 1000 // 2 days

export const create = mutation({
  args: contactSessionPublicSchema,
  handler: async ({ db }, args) => {
    return await db.insert("contactSessions", {
      ...args,
      expiresAt: Date.now() + SESSION_DURATION
    })
  }
})
