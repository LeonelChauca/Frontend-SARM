import { defineStore } from 'pinia'

export const useFormStore = defineStore('formStore', {
  state: () => ({
    formData: {
      fecha_registro: '',
      procedencia: '',
      industria: '',
      id_marca: '',
      id_modelo: '',
      id_estado_fisico: '',
      id_estado_logico: '',
      id_tipo_articulo: '',
      cod_registro: '',
      serie: '',
      calibre: '',
      nro_cargador: '',
      capacidad_cargador: '',
      capacidad_tambor: '',
      acabado: '',
    },
  }),
  actions: {
    actualizarCampo(campo, valor) {
      this.formData[campo] = valor
    },

    limpiarFormulario() {
      this.formData = {
        fecha_registro: '',
        procedencia: '',
        industria: '',
        id_marca: '',
        id_modelo: '',
        id_estado_fisico: '',
        id_estado_logico: '',
        id_tipo_articulo: '',
        cod_registro: '',
        serie: '',
        calibre: '',
        nro_cargador: '',
        capacidad_cargador: '',
        capacidad_tambor: '',
        acabado: '',
      }
    },
  },
})
