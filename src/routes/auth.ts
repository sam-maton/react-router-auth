import { password } from 'bun'
import { Hono } from 'hono'
import {
  getCookie,
  getSignedCookie,
  setCookie,
  setSignedCookie,
  deleteCookie,
} from 'hono/cookie'

export const auth = new Hono()

const user = {
  id: 1,
  name: 'Steven Smith',
  userName: 'steve_smith',
  email: 'steve@email.com',
}

const userPassword = password.hash('12345678')

auth.post('/login', (c) => {
  setCookie(c, 'router-auth', '12345678', {
    httpOnly: true,
    sameSite: 'lax',
    secure: true,
  })
  return c.json(user)
})
