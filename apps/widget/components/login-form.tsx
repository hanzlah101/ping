import { z } from "zod/mini"
import { useForm } from "react-hook-form"
import { useMutation } from "convex/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@ping/ui/components/input"
import { Button } from "@ping/ui/components/button"
import { api } from "@ping/backend"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@ping/ui/components/form"

const schema = z.object({
  name: z
    .string()
    .check(
      z.minLength(1, "Name is required"),
      z.minLength(3, "Name must be at least 3 characters long"),
      z.maxLength(100, "Name must be less than 100 characters")
    ),
  email: z
    .string()
    .check(
      z.minLength(1, "Email is required"),
      z.email("Invalid email address"),
      z.maxLength(320, "Invalid email address")
    )
})

const testOrgId = "123"

export function LoginForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: ""
    }
  })

  const createSession = useMutation(api.public.session.create)

  const onSubmit = form.handleSubmit(async (values) => {
    const contactSessionId = await createSession({
      ...values,
      organizationId: testOrgId,
      metadata: {
        userAgent: navigator.userAgent,
        language: navigator.language,
        languages: navigator.languages.join(", "),
        platform: navigator.platform,
        vendor: navigator.vendor,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        viewPortSize: `${window.innerWidth}x${window.innerHeight}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        timezoneOffset: new Date().getTimezoneOffset(),
        cookieEnabled: navigator.cookieEnabled,
        referrer: document.referrer || undefined,
        currentUrl: window.location.href
      }
    })

    console.log(contactSessionId)
  })

  const isSubmitting = form.formState.isSubmitting

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="flex-1 space-y-4 p-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  autoFocus
                  disabled={isSubmitting}
                  placeholder="Enter your name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  disabled={isSubmitting}
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Log in"}
        </Button>
      </form>
    </Form>
  )
}
