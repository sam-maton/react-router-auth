import { Hono } from 'hono'
import {
  getCookie,
  getSignedCookie,
  setCookie,
  setSignedCookie,
  deleteCookie,
} from 'hono/cookie'

export const auth = new Hono()

auth.post('/login', (c) => {
  setCookie(c, 'session', '1234', {
    httpOnly: false,
    sameSite: 'lax',
    secure: true,
  })
  return c.json({
    message: 'Login route!',
  })
})
