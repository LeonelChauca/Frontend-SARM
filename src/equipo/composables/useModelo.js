// composables/useApi.js
import { ref } from 'vue'
import { sendModelo, getModelo, deleteModelo } from '../services/api'

export function useModelo() {
  const response = ref('')
  const error = ref(null)
  const loading = ref(false)

  const responseGet = ref([])
  const errorGet = ref(null)
  const loadingGet = ref(false)

  const responseDelete = ref([])
  const errorDelete = ref(null)
  const loadingDelete = ref(false)

  // Función
  const SendModelo = async data => {
    loading.value = true
    try {
      const res = await sendModelo(data)
      console.log('este es ', res)
      response.value = res
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const GetModelo = async data => {
    loadingGet.value = true
    try {
      const res = await getModelo(data)
      console.log('este es ', res.data)
      responseGet.value = res.data
    } catch (err) {
      errorGet.value = err
    } finally {
      loadingGet.value = false
    }
  }

  const DeleteModelo = async data => {
    loadingDelete.value = true
    try {
      const res = await deleteModelo(data)
      console.log('este es ', res)
      responseDelete.value = res
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

    SendModelo,
    GetModelo,
    DeleteModelo,
  }
}
