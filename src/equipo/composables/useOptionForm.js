import { ref } from 'vue'
import { getOptionsForm } from '../services/api'

export function useOptionForm() {
  const response = ref([])
  const error = ref(null)
  const loading = ref(false)

  const GetOptions = async value => {
    loading.value = true
    try {
      const res = await getOptionsForm(value)
      response.value = res.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }
  return {
    response,
    error,
    loading,

    GetOptions,
  }
}
