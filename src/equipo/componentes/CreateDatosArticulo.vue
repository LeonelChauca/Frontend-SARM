<template>
  <div class="w-[90%] mx-auto h-full">
    <h3 class="font-semibold">Registro de Articulo</h3>
    <div
      class="w-full flex flex-col flex-wrap items-center sm:items-start sm:flex-row gap-4 lg:w-[90%] mx-auto my-3"
    >
      <div class="card flex flex-col gap-3 w-[230px]">
        <label for="date" class="text-sm">Fecha de registro</label>
        <DatePicker
          id="fecha_registro"
          v-model="fecha_registro"
          class="h-8"
          size="small"
          placeholder="Ingrese la fecha"
          showIcon
        />
        <small class="text-xs text-red-500">
          <ErrorMessage name="fecha_registro" />
        </small>
      </div>

      <div class="card flex w-[230px] flex-col gap-3">
        <label for="procedencia" class="text-sm">Procedencia</label>
        <Select
          v-model="procedencia"
          id="procedencia-select"
          :options="dataSelectProcedencia"
          option-value="nombre"
          optionLabel="nombre"
          placeholder="Selecciona Procedencia"
          class="w-full h-8 items-center"
          size="small"
        >
          <template #dropdownicon>
            <i class="pi pi-map" />
          </template>
        </Select>
        <small class="text-xs text-red-500">
          <ErrorMessage name="procedencia" />
        </small>
      </div>
      <div class="card w-[230px] flex flex-col gap-3">
        <label for="procedencia-select" class="text-sm">Industria</label>
        <Select
          v-model="industria"
          id="procedencia-select"
          :options="dataSelectIndustria"
          option-value="nombre"
          optionLabel="nombre"
          placeholder="Selecciona Industria"
          class="w-full h-8 items-center"
          size="small"
        >
          <template #dropdownicon>
            <i class="pi pi-map" />
          </template>
        </Select>
        <small class="text-xs text-red-500">
          <ErrorMessage name="industria" />
        </small>
      </div>
      <div class="card w-[230px] flex flex-col gap-3">
        <label for="id_estado_fisico" class="text-sm">Estado Fisico</label>
        <Select
          v-model="est_fisico"
          id="id_estado_fisico"
          :options="estado_fisico.value"
          option-value="id_estado_fisico"
          optionLabel="nombre_estado_fisico"
          placeholder="Selecciona Industria"
          class="w-full h-8 items-center"
          size="small"
        >
          <template #dropdownicon>
            <i class="pi pi-map" />
          </template>
        </Select>
        <small class="text-xs text-red-500">
          <ErrorMessage name="id_estado_fisico" />
        </small>
      </div>
      <div class="card w-[230px] flex flex-col gap-3">
        <label for="procedencia-select" class="text-sm">Estado Logico</label>
        <Select
          v-model="est_logico"
          id="procedencia-select"
          :options="estado_logico.value"
          option-value="id_estado_logico"
          optionLabel="nombre_estado_logico"
          placeholder="Selecciona Industria"
          class="w-full h-8 items-center"
          size="small"
        >
          <template #dropdownicon>
            <i class="pi pi-map" />
          </template>
        </Select>
        <small class="text-xs text-red-500">
          <ErrorMessage name="id_estado_logico" />
        </small>
      </div>
      <div class="card w-[230px] flex flex-col gap-3">
        <label for="procedencia-select" class="text-sm">Tipo de articulo</label>
        <Select
          v-model="tp_articulo"
          id="procedencia-select"
          :options="tipo_articulo.value"
          option-value="id_tipo_articulo"
          optionLabel="nombre_tipo_articulo"
          placeholder="Selecciona Industria"
          class="w-full h-8 items-center"
          size="small"
        >
          <template #dropdownicon>
            <i class="pi pi-map" />
          </template>
        </Select>
        <small class="text-xs text-red-500">
          <ErrorMessage name="id_tipo_articulo" />
        </small>
      </div>
    </div>
  </div>
</template>
<script setup>
import { watch } from 'vue'
import {
  dataSelectIndustria,
  dataSelectProcedencia,
} from '../helpers/dataSelect'
import { validateArticulo } from '../helpers/yupValidations'
import { useFormStore } from '../store/formStore'
import { useOptionFormStore } from '../store/optionFormStore'
import { useForm, useField, ErrorMessage } from 'vee-validate'
const { estado_fisico, estado_logico, tipo_articulo } = useOptionFormStore()

const { validate, resetForm } = useForm({
  validationSchema: validateArticulo,
  initialValues: {
    fecha_registro: '',
    procedencia: '',
    industria: '',
    id_estado_fisico: 0,
    id_estado_logico: 0,
    id_tipo_articulo: 0,
  },
})

const { value: fecha_registro } = useField('fecha_registro')
const { value: procedencia } = useField('procedencia')
const { value: industria } = useField('industria')
const { value: est_fisico } = useField('id_estado_fisico')
const { value: est_logico } = useField('id_estado_logico')
const { value: tp_articulo } = useField('id_tipo_articulo')

defineExpose({
  validateForm: async () => {
    const isValid = await validate()
    return isValid
  },
  borrarDatosFormArticulo: () => {
    resetForm()
  },
})

const formStore = useFormStore()

watch(
  [fecha_registro, procedencia, industria, est_fisico, est_logico, tp_articulo],
  ([
    newFecha,
    newProcedencia,
    newIndustria,
    newEstFisico,
    newEstLogico,
    newTpArticulo,
  ]) => {
    formStore.actualizarCampo('fecha_registro', newFecha)
    formStore.actualizarCampo('procedencia', newProcedencia)
    formStore.actualizarCampo('industria', newIndustria)
    formStore.actualizarCampo('id_estado_fisico', newEstFisico)
    formStore.actualizarCampo('id_estado_logico', newEstLogico)
    formStore.actualizarCampo('id_tipo_articulo', newTpArticulo)
  },
)
watch(
  () => formStore.formData,
  newData => {
    console.log('Estado Global Actualizado:', newData)
  },
  { deep: true }, // Necesario para observar cambios en objetos anidados
)
</script>
