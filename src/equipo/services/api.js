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
export const getMarca = data => {
  return api.get(`/articulo/${data}/referencia/marca`)
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
  return api.get(`/articulo/${data}/referencia/modelo`)
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
export const getArma = () => {
  return api.get('/articulo/arma')
}

//borrar arma
export const deleteArma = data => {
  return api.delete(`/articulo/arma/${data}`)
}

//editar arma
export const editArma = (id, data) => {
  return api.patch(`/articulo/arma/${id}`, data)
}

//registrar equipo
export const sendEquipo = data => {
  return api.post('/articulo/equipo', data)
}

//borrar equipo
export const deleteEquipo = data => {
  return api.delete(`/articulo/equipo/${data}`)
}

//obtener equipo
export const getEquipo = () => {
  return api.get('/articulo/equipo')
}
//editar equipo
export const editEquipo = (id, data) => {
  return api.patch(`/articulo/equipo/${id}`, data)
}
