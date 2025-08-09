import { config } from "@ping/eslint-config/base"

/** @type {import("eslint").Linter.Config} */
export default [
  ...config,
  {
    ignores: ["./convex/_generated"]
  }
]
