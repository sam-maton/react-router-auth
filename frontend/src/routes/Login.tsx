import { Form, useActionData, type ActionFunctionArgs } from 'react-router-dom'
import { useStore } from '../utils/ProtectedRoutes'

type Errors = {
  username?: string
  password?: string
}

export async function action({ request }: ActionFunctionArgs) {
  const data = await request.formData()
  const username = data.get('username')
  const password = data.get('password')
  const errors: Errors = {}
  if (!username) {
    errors.username = 'Username is required'
  }
  if (!password) {
    errors.password = 'Password is required'
  }

  if (Object.keys(errors).length) {
    return errors
  }

  const response = await fetch('/api/auth/login', {
    method: 'POST',
    body: data,
  })

  const body = await response.json()

  return null
}

export function Login() {
  const errors: Errors = useActionData()

  const setUser = useStore((state) => state.setUser)

  setUser({ id: 1, name: 'Steven Smith', userName: 'steve_smith' })
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <Form
        method="post"
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors?.username ? <span>{errors?.username}</span> : null}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors?.password ? <span>{errors?.password}</span> : null}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </Form>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() =>
            setUser({ name: 'Steven Smith', userName: 'steve_smith' })
          }
        >
          Fake Login
        </button>
      </div>
    </div>
  )
}
