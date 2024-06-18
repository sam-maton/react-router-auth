import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'
import './index.css'

// Context
import { AppContextProvider, useAppContext } from './utils/appContext'

// Routes
import { Root } from './routes/Root'
import { About } from './routes/About'
import { Admin, loader as adminLoader } from './routes/Admin'
import { Login, action as loginAction } from './routes/Login'
import { Index } from './routes/Index'
import { ProtectedRoutes } from './utils/ProtectedRoutes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
)

function App() {
  const appContext = useAppContext()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route element={<ProtectedRoutes />}>
          <Route index element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="admin" element={<Admin />} loader={adminLoader} />
        </Route>
        <Route
          path="login"
          element={<Login />}
          action={loginAction(appContext)}
        />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}
