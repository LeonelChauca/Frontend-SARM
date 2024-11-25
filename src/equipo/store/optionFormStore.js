import { defineStore } from 'pinia'
import { useOptionForm } from '../composables/useOptionForm'

export const useOptionFormStore = defineStore('optionFormStore', {
  state: () => ({
    error: null,
    loading: false,
    marca: [],
    modelo: [],
    estado_fisico: [],
    estado_logico: [],
    tipo_articulo: [],
    cargador: [],
  }),
  actions: {
    async fetchOptions(value) {
      const { GetOptions, response } = useOptionForm()
      this.loading = true
      this.error = null
      try {
        await GetOptions(value)
        console.log('hola')
        console.log(response.value.modelo)
        this.marca.value = response.value.marca
        this.modelo.value = response.value.modelo
        this.estado_fisico.value = response.value.estado_fisico
        this.estado_logico.value = response.value.estado_logico
        this.tipo_articulo.value = response.value.tipo_articulo
        this.acabado = response.value.acabado
      } catch (err) {
        console.error(err)
        this.error = err
      } finally {
        this.loading = false
      }
    },

    clearData() {
      this.error = null
      this.loading = false
      this.marcar = []
      this.modelo = []
      this.estado_fisico = []
      this.estado_logico = []
      this.tipo_articulo = []
    },
  },
})
