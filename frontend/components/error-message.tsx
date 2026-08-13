import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function ErrorAlert({title, message}: {title?: string, message: string}) {
  return (
    <Alert variant="destructive" className={"mb-4 border-red-400 bg-red-50"}>
      <AlertCircle />
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}