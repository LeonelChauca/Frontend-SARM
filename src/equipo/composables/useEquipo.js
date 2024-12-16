import { ref } from 'vue'
import {
  deleteEquipo,
  editEquipo,
  getEquipo,
  sendEquipo,
} from '../services/api'
export function useEquipo() {
  const response_equipo = ref('')
  const error_equipo = ref(null)
  const loading_equipo = ref(false)
  const responseGet = ref([])
  const errorGet = ref(null)
  const loadingGet = ref(false)
  const responseDelete = ref({})
  const errorDelete = ref(null)
  const loadingDelete = ref(false)

  const responseEquipoEdit = ref('')
  const errorEquipoEdit = ref(null)
  const loadingEquipoEdit = ref(false)

  const SendEquipo = async data => {
    loading_equipo.value = true
    try {
      const res = await sendEquipo(data)
      response_equipo.value = res
    } catch (err) {
      error_equipo.value = err
    } finally {
      loading_equipo.value = false
    }
  }
  const GetEquipo = async () => {
    loadingGet.value = true
    try {
      const res = await getEquipo()
      responseGet.value = res.data
    } catch (err) {
      errorGet.value = err
    } finally {
      loadingGet.value = false
    }
  }
  const DeleteEquipo = async value => {
    loadingDelete.value = true
    try {
      const res = await deleteEquipo(value)
      responseDelete.value = res.data
    } catch (err) {
      errorDelete.value = err
    } finally {
      loadingDelete.value = false
    }
  }

  const EditEquipo = async (id, data) => {
    loadingEquipoEdit.value = true
    try {
      const res = await editEquipo(id, data)
      responseEquipoEdit.value = res
    } catch (err) {
      errorEquipoEdit.value = err
    } finally {
      loadingEquipoEdit.value = false
    }
  }
  return {
    loading_equipo,
    response_equipo,
    error_equipo,
    responseGet,
    errorGet,
    loadingGet,
    responseDelete,
    errorDelete,
    loadingDelete,
    responseEquipoEdit,
    errorEquipoEdit,
    loadingEquipoEdit,

    SendEquipo,
    GetEquipo,
    DeleteEquipo,
    EditEquipo,
  }
}
