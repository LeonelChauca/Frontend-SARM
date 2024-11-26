import axios from 'axios'

const baseURL2 = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: baseURL2,
  headers: {
    'Content-Type': 'application/json',
  },
})
//registrar marca
export const sendMarca = data => {
  return api.post('/articulo/marca', data)
}
//obtener marca
export const getMarca = () => {
  return api.get('/articulo/marca')
}
//borrar marca
export const deleteMarca = data => {
  return api.delete(`/articulo/marca/${data}`)
}

//registrar modelo
export const sendModelo = data => {
  return api.post('/articulo/modelo', data)
}

//obtener modelo
export const getModelo = data => {
  return api.get('/articulo/modelo', data)
}
//borrar modelo
export const deleteModelo = data => {
  return api.delete(`/articulo/modelo/${data}`)
}

//obtener opciones de formulario
export const getOptionsForm = value => {
  return api.get(`/articulo/${value}/referencia`)
}

//registrar arma
export const sendArma = data => {
  return api.post('/articulo/arma', data)
}

//obtener arma
export const getArma = data => {
  return api.get('/articulo/arma')
}
