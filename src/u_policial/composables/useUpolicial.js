import { ref } from 'vue'
import { getUnidadesPoliciales } from '../services/api'
export function useUpolicial() {
  const responseGet = ref([])
  const errorGet = ref(null)
  const loadingGet = ref(false)

  const getUnidadPolicial = async () => {
    loadingGet.value = true
    try {
      const res = await getUnidadesPoliciales()
      responseGet.value = res
    } catch (err) {
      errorGet.value = err
    } finally {
      loadingGet.value = false
    }
  }

  return {
    responseGet,
    errorGet,
    loadingGet,

    getUnidadPolicial,
  }
}
