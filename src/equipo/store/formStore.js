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
    initialData(data) {
      this.formData = {
        fecha_registro: data.fecha_registro,
        procedencia: data.procedencia,
        industria: data.industria,
        id_marca: data.id_marca,
        id_modelo: data.id_modelo,
        id_estado_fisico: data.id_estado_fisico,
        id_estado_logico: data.id_estado_logico,
        id_tipo_articulo: data.id_tipo_articulo,
        cod_registro: data.cod_registro,
        serie: data.serie,
        calibre: data.calibre,
        nro_cargador: data.nro_cargador,
        capacidad_cargador: data.capacidad_cargador,
        capacidad_tambor: data.capacidad_tambor,
        acabado: data.acabado,
      }
    },
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
        fecha_registro: this.formData.fecha_registro,
        procedencia: this.formData.procedencia,
        industria: this.formData.industria,
        id_marca: this.formData.id_marca,
        id_modelo: this.formData.id_modelo,
        id_estado_fisico: this.formData.id_estado_fisico,
        id_estado_logico: this.formData.id_estado_logico,
        id_tipo_articulo: this.formData.id_tipo_articulo,
        cod_registro: this.formData.cod_registro,
        serie: this.formData.serie,
        calibre: this.formData.calibre,
        nro_cargador: this.formData.nro_cargador,
        capacidad_cargador: this.formData.capacidad_cargador,
        capacidad_tambor: this.formData.capacidad_tambor,
        acabado: this.formData.acabado,
      }
    },
    setInitialMarcaModelo(data) {
      this.formData.id_marca = data.id_marca
      this.formData.id_modelo = data.id_modelo
    },
    setInitialArticulo(data) {
      this.formData.fecha_registro = data.fecha_registro
      this.formData.procedencia = data.procedencia
      this.formData.industria = data.industria
      this.formData.id_estado_fisico = data.id_estado_fisico
      this.formData.id_estado_logico = data.id_estado_logico
      this.formData.id_tipo_articulo = data.id_tipo_articulo
    },

    setInitialArma(data) {
      this.formData.cod_registro = data.cod_registro
      this.formData.calibre = data.calibre
      this.formData.nro_cargador = data.nro_cargador
      this.formData.capacidad_cargador = data.capacidad_cargador
      this.formData.capacidad_tambor = data.capacidad_tambor
      this.formData.acabado = data.acabado
      this.formData.serie = data.serie
    },
    setInitialEquipo(data) {
      this.formData.cod_registro = data.cod_registro
    },
  },
})
