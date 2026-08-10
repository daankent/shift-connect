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
import { redirect } from "next/navigation"

export function LoginForm({ ...props }) {
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
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">E-mailadres</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="voornaam.achternaam@supermarkt.nl"
                  required
                  autoFocus={true}
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Wachtwoord</FieldLabel>
                </div>
                <Input id="password" type="password" required />
              </Field>
              <Field>
                <Button type={"button"} onClick={()=>{redirect("/")}}>Login</Button>
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
