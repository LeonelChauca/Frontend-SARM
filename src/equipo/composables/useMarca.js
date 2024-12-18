// composables/useApi.js
import { ref } from 'vue'
import { sendMarca, getMarca, deleteMarca } from '../services/api'

export function useMarca() {
  const response = ref('')
  const error = ref(null)
  const loading = ref(false)

  const responseGet = ref([])
  const errorGet = ref(null)
  const loadingGet = ref(false)

  const responseDelete = ref({})
  const errorDelete = ref(null)
  const loadingDelete = ref(false)

  // Función
  const SendMarca = async data => {
    loading.value = true
    try {
      const res = await sendMarca(data)
      response.value = res
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const GetMarca = async data => {
    loadingGet.value = true
    try {
      const res = await getMarca(data)
      responseGet.value = res.data
    } catch (err) {
      errorGet.value = err
    } finally {
      loadingGet.value = false
    }
  }

  const DeleteMarca = async value => {
    loadingDelete.value = true
    try {
      const res = await deleteMarca(value)
      responseDelete.value = res.data
    } catch (err) {
      errorDelete.value = err
    } finally {
      loadingDelete.value = false
    }
  }

  return {
    response,
    error,
    loading,

    responseGet,
    errorGet,
    loadingGet,

    responseDelete,
    errorDelete,
    loadingDelete,

    SendMarca,
    GetMarca,
    DeleteMarca,
  }
}
