// Cookies should only use the Secure flag when the current request is HTTPS.
// This keeps local production builds over HTTP working while preserving secure
// cookies behind HTTPS proxies in deployed environments.
export function isSecureRequest(request: Request) {
  const forwardedProtocol = request.headers
    .get("x-forwarded-proto")
    ?.split(",")[0]
    ?.trim()
    ?.toLowerCase()

  if (forwardedProtocol) {
    return forwardedProtocol === "https"
  }

  return new URL(request.url).protocol === "https:"
}
