import { LoginForm } from "./login-form"
import { WidgetHeader } from "./widget-header"

export function WidgetAuth() {
  return (
    <>
      <WidgetHeader description="Let's get you started!" />
      <LoginForm />
    </>
  )
}
