import { ref } from 'vue'
import { sendArma } from '../services/api'

export function useArma() {
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
  const SendArma = async data => {
    loading.value = true
    try {
      const res = await sendArma(data)
      console.log(res)
      response.value = res
    } catch (err) {
      error.value = err
      console.log(err)
    } finally {
      loading.value = false
    }
  }

  // const GetArma = async () => {
  //   loadingGet.value = true;
  //   try {
  //     const res = await getArma();
  //     responseGet.value = res.data;
  //   } catch (err) {
  //     errorGet.value = err;
  //   } finally {
  //     loadingGet.value = false;
  //   }
  // };

  // const DeleteArma = async (value) => {
  //   loadingDelete.value = true;
  //   try {
  //     const res = await deleteArma(value);
  //     responseDelete.value = res.data;
  //   } catch (err) {
  //     errorDelete.value = err;
  //   } finally {
  //     loadingDelete.value = false;
  //   }
  // };

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
    SendArma,
  }
}
