import { Outlet, Navigate } from 'react-router-dom'

function checkCookie() {
  const cookies = document.cookie
  return cookies.includes('session')
}

export function ProtectedRoutes() {
  const user = checkCookie()

  if (!user) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}
