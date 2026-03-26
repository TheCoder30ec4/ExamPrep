import { API_BASE } from '../lib/api'

export type AuthResponse = {
  access_token: string
  refresh_token: string
  token_type: string
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

export async function signin(email: string, password: string): Promise<{ ok: true; data?: AuthResponse } | ApiError> {
  const res = await fetch(`${API_BASE}/auth/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  return handleResponse<AuthResponse>(res)
}

export async function signup(payload: any): Promise<{ ok: true; data?: AuthResponse } | ApiError> {
  const res = await fetch(`${API_BASE}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  return handleResponse<AuthResponse>(res)
}

export async function refresh(token: string): Promise<{ ok: true; data?: AuthResponse } | ApiError> {
  const res = await fetch(`${API_BASE}/auth/refresh`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    },
  })
  return handleResponse<AuthResponse>(res)
}
