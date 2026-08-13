"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"
import ErrorAlert from "@/components/error-message"

export function LoginForm({ ...props }) {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setError(null)
    setIsLoading(true)


    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })

    setIsLoading(false)

    if (!response.ok) {
      setError("E-mailadres of wachtwoord is onjuist")
      return
    }

    router.push("/")
    router.refresh()
  }

  return (
    <div className={"flex flex-col gap-6"} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welkom terug</CardTitle>
          <CardDescription>
            Log in om verder te gaan met ShiftConnect
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && <ErrorAlert title={"Inloggen mislukt"} message={error} />}
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">E-mailadres</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="voornaam.achternaam@supermarkt.nl"
                  required
                  autoFocus={true}
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Wachtwoord</FieldLabel>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Field>
              <Field>
                <Button type={"submit"} disabled={isLoading}>
                  {isLoading ? "Inloggen..." : "Login"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        Inloggen doe je met je winkel account.
      </FieldDescription>
    </div>
  )
}
