import axios from 'axios'

const baseURL2 = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: baseURL2,
  headers: {
    'Content-Type': 'application/json',
  },
})
//login
export const login = data => {
  return api.post('/auth/login', data)
}
//verificacion 2fa
export const verify2FA = data => {
  return api.post('/auth/verificarEmail', data)
}
