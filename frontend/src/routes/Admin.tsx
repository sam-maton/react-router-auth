import { useLoaderData } from 'react-router-dom'

export async function loader() {
  const response = await fetch(`/api/admin`)
  return response
}

export function Admin() {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
      <h1>Admin</h1>
      <p>This is the admin page</p>
    </div>
  )
}
