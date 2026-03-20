/**
 * API base URL and webhook URLs for auth flow.
 * Backend: use VITE_API_URL in .env or fallback for local dev.
 */
const getApiBase = (): string => {
  const env = import.meta.env.VITE_API_URL
  if (env && typeof env === 'string') return env.replace(/\/$/, '')
  return 'http://localhost:8000'
}

export const API_BASE = getApiBase()

export const SEND_MAIL_URL = 'https://n8n.ch-varun.xyz/webhook/send-mail'
export const VERIFY_OTP_URL = 'https://n8n.ch-varun.xyz/webhook/verify-otp'
