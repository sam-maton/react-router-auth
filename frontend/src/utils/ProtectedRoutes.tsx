import { Outlet, Navigate } from 'react-router-dom'

export function ProtectedRoutes() {
  const user = false

  if (!user) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}
