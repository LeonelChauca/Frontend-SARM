// composables/useApi.js
import { ref } from 'vue'
import { login } from '../services/api'

export function useAuth() {
  const response = ref('')
  const error = ref(null)
  const loading = ref(false)
  const id = ref('')

  // Función para login
  const authLogin = async data => {
    loading.value = true
    try {
      const res = await login(data)
      response.value = res.data
      id.value = res.data.id
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return { response, error, loading, id, authLogin }
}
