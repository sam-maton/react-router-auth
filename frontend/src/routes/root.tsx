import { Outlet } from 'react-router-dom'

export function Root() {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-gray-200">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="/admin" className="hover:text-blue-500">
                Admin
              </a>
            </li>
          </ul>
        </nav>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Login
        </button>
      </header>
      <main className="flex justify-center pt-10">
        <Outlet />
      </main>
    </div>
  )
}
