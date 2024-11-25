import { ref } from 'vue'
import { verify2FA } from '../services/api'

export function use2FA() {
  const response = ref('')
  const error = ref(null)
  const loading = ref(false)

  //funcion verificacion de 2FA

  const codeVerify2FA = async data => {
    loading.value = true
    try {
      const res = await verify2FA(data)
      response.value = res.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return { response, error, loading, codeVerify2FA }
}
