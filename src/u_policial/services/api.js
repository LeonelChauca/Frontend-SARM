import axios from 'axios'
const baseURL = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

//UNIDADES POLICIALES

export const getUnidadesPoliciales = () => {
  return api.get('/oficiales-unidades-ms/unidad')
}
