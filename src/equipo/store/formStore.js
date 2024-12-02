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
      marca_nombre: '',
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
    getDataEquipo() {
      return {
        fecha_registro: this.formData.fecha_registro,
        procedencia: this.formData.procedencia,
        industria: this.formData.industria,
        id_marca: this.formData.id_marca,
        id_modelo: this.formData.id_modelo,
        id_estado_fisico: this.formData.id_estado_fisico,
        id_estado_logico: this.formData.id_estado_logico,
        id_tipo_articulo: this.formData.id_tipo_articulo,
        cod_registro: this.formData.cod_registro,
      }
    },
    getDataArma() {
      return {
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
        marca_nombre: '',
      }
    },
  },
})
