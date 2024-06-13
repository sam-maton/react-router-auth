import { Outlet, Navigate } from 'react-router-dom'
import { create } from 'zustand'

type State = {
  user: object | null
}

type Action = {
  setUser: (user: State['user']) => void
}

export const useStore = create<State & Action>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user: user })),
}))

export function ProtectedRoutes() {
  const { user } = useStore.getState()
  console.log(user)
  if (!user) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}
