import { Hono } from 'hono'
import { auth } from './routes/auth'
import { admin } from './routes/admin'
import { logger } from 'hono/logger'

const app = new Hono()
app.use(logger())
app.basePath('/api').route('/admin', admin).route('/auth', auth)

export default {
  port: 4321,
  fetch: app.fetch,
}
