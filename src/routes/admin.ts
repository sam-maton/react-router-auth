import { Hono } from 'hono'

export const admin = new Hono()

admin.get('/', (c) => {
  return c.text('Admin route!')
})
