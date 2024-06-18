import { Outlet, Navigate } from 'react-router-dom'
import { useAppContext } from './appContext'

export function ProtectedRoutes() {
  const context = useAppContext()
  if (context === null || context.currentUser === null) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}
