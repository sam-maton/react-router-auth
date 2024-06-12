import { Hono } from 'hono'

export const auth = new Hono()

auth.post('/login', (c) => {
  return c.json({
    message: 'Login route!',
  })
})
