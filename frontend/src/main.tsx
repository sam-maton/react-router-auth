import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'

// Routes
import { Root } from './routes/Root'
import { About } from './routes/About'
import { Admin, loader as adminLoader } from './routes/Admin'
import { Login, action as loginAction } from './routes/Login'
import { Index } from './routes/Index'
import { ProtectedRoutes } from './utils/ProtectedRoutes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route element={<ProtectedRoutes />}>
        <Route index element={<Index />} />
        <Route path="about" element={<About />} />
        <Route path="admin" element={<Admin />} loader={adminLoader} />
      </Route>
      <Route path="login" element={<Login />} action={loginAction} />
    </Route>
  )
)

export const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
