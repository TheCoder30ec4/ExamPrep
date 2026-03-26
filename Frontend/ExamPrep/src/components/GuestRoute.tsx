import { Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

export function GuestRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    // If logged in, send them back to the dashboard or internal pages
    return <Navigate to="/dashboard" replace />
  }

  return <>{children}</>
}
