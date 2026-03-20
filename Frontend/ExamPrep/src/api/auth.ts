import { API_BASE, SEND_MAIL_URL, VERIFY_OTP_URL } from '../lib/api'

export type RegisterPayload = {
  name: string
  email: string
  password: string
  is_verified?: boolean
  is_active?: boolean
  is_admin?: boolean
}

export type ApiError = { ok: false; status: number; body: unknown }

async function handleResponse<T = unknown>(res: Response): Promise<{ ok: true; data?: T } | ApiError> {
  const text = await res.text()
  const body = (() => {
    try {
      return text ? (JSON.parse(text) as T) : {}
    } catch {
      return {}
    }
  })()
  if (res.ok) return { ok: true, data: body as T }
  return { ok: false, status: res.status, body: text || body }
}

export async function sendOtp(email: string): Promise<{ ok: true } | ApiError> {
  const res = await fetch(SEND_MAIL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
  return handleResponse(res)
}

export async function verifyOtp(email: string, otp: string): Promise<{ ok: true } | ApiError> {
  const res = await fetch(VERIFY_OTP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, verify_otp: otp }),
  })
  return handleResponse(res)
}

export async function login(email: string, password: string): Promise<{ ok: true; data?: { name?: string; email?: string } } | ApiError> {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, is_verified: false }),
  })
  return handleResponse<{ name?: string; email?: string }>(res)
}

export async function register(payload: RegisterPayload): Promise<{ ok: true; data?: unknown } | ApiError> {
  const body = {
    name: payload.name,
    email: payload.email,
    password: payload.password,
    is_verified: payload.is_verified ?? false,
    is_active: payload.is_active ?? true,
    is_admin: payload.is_admin ?? false,
  }
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  return handleResponse(res)
}
