import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

export const list = query({
  handler: async ({ db }) => {
    return db.query("users").collect()
  }
})

export const create = mutation({
  args: {
    name: v.string()
  },
  handler: async ({ db }, input) => {
    const userId = await db.insert("users", input)
    return userId
  }
})
