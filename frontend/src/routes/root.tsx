import { Outlet } from 'react-router-dom'
export function Root() {
  return (
    <div>
      <nav></nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
