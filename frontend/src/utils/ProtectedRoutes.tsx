import { Outlet, Navigate } from 'react-router-dom'
import { create } from 'zustand'

export const useStore = create((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user: user })),
  logout: () => set({ user: null }),
}))

export function ProtectedRoutes() {
  const { user } = useStore.getState()
  console.log(user)
  if (!user) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}
