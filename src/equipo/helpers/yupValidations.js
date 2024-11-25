import * as yup from 'yup'
export const validateMarca = yup.object({
  nombre_marca: yup
    .string()
    .required('Nombre es obligatorio')
    .matches(/^[a-zA-Z0-9._%+-]+$/, 'El nombre debe ser alfanumérico'),
  tipo: yup
    .mixed()
    .transform(value => value?.code || '') // Extrae `code` si existe
    .required('Estado es obligatorio')
    .typeError('Debe seleccionar una opción válida'),
})

export const validateModelo = yup.object({
  nombre_modelo: yup
    .string()
    .required('Nombre es obligatorio')
    .matches(/^[a-zA-Z0-9._%+-]+$/, 'El nombre debe ser alfanumérico'),
  tipo: yup
    .mixed()
    .transform(value => value?.code || '')
    .required('Estado es obligatorio')
    .typeError('Debe seleccionar una opción válida'),
})

export const validateRegistroMarcaModelo = yup.object({
  id_marca: yup
    .number()
    .min(1, 'la marca es obligatoria !')
    .required('La marca es obligatoria'),
  id_modelo: yup
    .number()
    .min(1, 'el modelo es obligatorio !')
    .required('El modelo es obligatorio'),
})

export const validateArticulo = yup.object({
  fecha_registro: yup
    .string()
    .min(1, 'Fecha de registro es obligatoria')
    .required('Fecha de registro es obligatoria'),
  procedencia: yup.string().min(1).required('Procedencia es obligatoria'),
  industria: yup.string().min(1).required('Industria es obligatoria'),
  id_estado_fisico: yup
    .number()
    .min(1, 'Estado físico es obligatorio')
    .required('Estado físico es obligatorio'),
  id_estado_logico: yup
    .number()
    .min(1, 'Estado lógico es obligatorio')
    .required('Estado lógico es obligatorio'),
  id_tipo_articulo: yup
    .number()
    .min(1, 'Tipo de artículo es obligatorio')
    .required('Tipo de artículo es obligatorio'),
})

export const validateArticuloArma = yup.object({
  cod_registro: yup
    .string()
    .min(1, 'Código de registro es obligatorio')
    .required('Código de registro es obligatorio'),
  serie: yup
    .string()
    .min(1, 'Series es obligarotio')
    .required('Serie es obligatoria'),
  calibre: yup
    .string()
    .min(1, 'Calibre obligatorio')
    .required('Calibre es obligatorio'),
  nro_cargador: yup.number().required('Número de cargador es obligatorio'),
  capacidad_cargador: yup
    .number()
    .required('Capacidad de cargador es obligatoria'),
  capacidad_tambor: yup.number().required('Capacidad de tambor es obligatoria'),
  acabado: yup
    .string()
    .min(1, 'Acabado es obligatorio')
    .required('Acabado es obligatorio'),
})
