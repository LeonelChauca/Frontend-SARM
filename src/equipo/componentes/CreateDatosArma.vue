<template>
  <div class="w-[90%] mx-auto h-full">
    <h3 class="font-semibold">Datos del Arma</h3>
    <form
      class="w-full flex flex-col flex-wrap items-center sm:items-start sm:flex-row gap-4 lg:w-[90%] mx-auto my-3"
    >
      <div class="card flex flex-col w-[230px] gap-3">
        <label for="code_registro_arma" class="text-sm"
          >Código de registro de arma</label
        >
        <InputGroup>
          <InputText
            class="h-8"
            placeholder="Código de registro"
            id="code_registro"
            v-model="cod_registro"
          />
          <InputGroupAddon class="h-8">
            <i class="pi pi-lock"></i>
          </InputGroupAddon>
        </InputGroup>
        <small class="text-xs text-red-500">
          <ErrorMessage name="cod_registro" />
        </small>
      </div>

      <div class="card flex flex-col w-[230px] gap-3">
        <label for="calibre" class="text-sm">Calibre</label>
        <InputGroup>
          <InputText
            class="h-8"
            v-model="calibre"
            placeholder="Calibre"
            id="calibre"
          />
          <InputGroupAddon class="h-8">
            <i class="pi pi-compass"></i>
          </InputGroupAddon>
        </InputGroup>
        <small class="text-xs text-red-500">
          <ErrorMessage name="calibre" />
        </small>
      </div>

      <div class="card flex w-[230px] flex-col gap-3">
        <label for="procedencia-select" class="text-sm"
          >Número de cargador</label
        >
        <Select
          v-model="nro_cargador"
          id="procedencia-select"
          :options="dataSelectNCargador"
          optionLabel="nombre"
          optionValue="code"
          placeholder="Selecciona cargador"
          class="w-full h-8 items-center"
          size="small"
        >
          <template #dropdownicon>
            <i class="pi pi-exclamation-circle" />
          </template>
        </Select>
        <small class="text-xs text-red-500">
          <ErrorMessage name="nro_cargador" />
        </small>
      </div>

      <div class="card flex flex-col w-[230px] gap-3">
        <label for="capacidad_cargador" class="text-sm"
          >Capacidad de cargador</label
        >
        <Select
          v-if="nro_cargador != 0"
          v-model="capacidad_cargador"
          id="capacidad_cargador"
          :options="dataSelectNroCargador"
          optionValue="nro"
          optionLabel="nro"
          placeholder="Selecciona capacidad"
          class="w-full h-8 items-center"
          size="small"
        >
          <template #dropdownicon>
            <i class="pi pi-exclamation-circle" />
          </template>
        </Select>
        <Select
          v-else
          v-model="capacidad_cargador"
          id="capacidad_cargador"
          :options="dataSelectNroCargador"
          optionLabel="nro"
          placeholder="NO TIENE"
          disabled
          class="w-full h-8 items-center"
          size="small"
        >
          <template #dropdownicon>
            <i class="pi pi-exclamation-circle" />
          </template>
        </Select>
        <small class="text-xs text-red-500">
          <ErrorMessage name="capacidad_cargador" />
        </small>
      </div>

      <div class="card flex flex-col w-[230px] gap-3">
        <label for="capacidad_tambor" class="text-sm"
          >Capacidad de Tambor</label
        >
        <Select
          v-if="nro_cargador === 0"
          v-model="capacidad_tambor"
          id="capacidad_cargador"
          :options="dataSelectNroTambor"
          optionLabel="nro"
          optionValue="nro"
          placeholder="Selecciona capacidad"
          class="w-full h-8 items-center"
          size="small"
        >
          <template #dropdownicon>
            <i class="pi pi-exclamation-circle" />
          </template>
        </Select>
        <Select
          v-else
          v-model="capacidad_tambor"
          id="capacidad_cargador"
          :options="dataSelectNroTambor"
          optionLabel="nro"
          placeholder="NO TIENE"
          disabled
          class="w-full h-8 items-center"
          size="small"
        >
          <template #dropdownicon>
            <i class="pi pi-exclamation-circle" />
          </template>
        </Select>
        <small class="text-xs text-red-500">
          <ErrorMessage name="capacidad_tambor" />
        </small>
      </div>

      <div class="card flex flex-col w-[230px] gap-3">
        <label for="acabado" class="text-sm">Acabado</label>
        <InputGroup>
          <InputText
            v-model="acabado"
            class="h-8"
            placeholder="Acabado"
            id="acabado"
          />
          <InputGroupAddon class="h-8">
            <i class="pi pi-compass"></i>
          </InputGroupAddon>
        </InputGroup>
        <small class="text-xs text-red-500">
          <ErrorMessage name="acabado" />
        </small>
      </div>
      <div class="card flex flex-col w-[230px] gap-3">
        <label for="serie" class="text-sm">Serie</label>
        <InputGroup>
          <InputText
            v-model="serie"
            class="h-8"
            placeholder="Código de serie"
            id="serie"
          />
          <InputGroupAddon class="h-8">
            <i class="pi pi-key"></i>
          </InputGroupAddon>
        </InputGroup>
        <small class="text-xs text-red-500">
          <ErrorMessage name="serie" />
        </small>
      </div>
    </form>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import {
  dataSelectNCargador,
  dataSelectNroCargador,
  dataSelectNroTambor,
} from '../helpers/dataSelect'
import { useForm, useField, ErrorMessage } from 'vee-validate'
import { useFormStore } from '../store/formStore'
import { validateArticuloArma } from '../helpers/yupValidations'

const emit = defineEmits(['valid'])

const { validate, resetForm } = useForm({
  validationSchema: validateArticuloArma,
  initialValues: {
    cod_registro: '',
    calibre: '',
    acabado: '',
    serie: '',
    nro_cargador: 0,
    capacidad_cargador: 0,
    capacidad_tambor: 0,
  },
})

defineExpose({
  validateForm: async () => {
    const isValid = await validate()
    console.log(isValid.valid)
    return isValid.valid
  },

  borrarDatosFormArma: () => {
    resetForm()
  },
})

const { value: cod_registro } = useField('cod_registro')
const { value: calibre } = useField('calibre')
const { value: acabado } = useField('acabado')
const { value: serie } = useField('serie')
const { value: nro_cargador } = useField('nro_cargador')
const { value: capacidad_cargador } = useField('capacidad_cargador')
const { value: capacidad_tambor } = useField('capacidad_tambor')

//PARA RESETEAR EL VALOR DE LA CAPACIDAD DE CARGADOR CUANDO SE CAMBIA EL TIPO DE CARGADOR
watch(nro_cargador, value => {
  if (value > 0) {
    capacidad_cargador.value = 0
  } else {
    capacidad_tambor.value = 0
  }
})
const formStore = useFormStore()
watch(
  [
    cod_registro,
    calibre,
    acabado,
    serie,
    nro_cargador,
    capacidad_cargador,
    capacidad_tambor,
  ],
  ([
    newCod,
    newCalibre,
    newAcabado,
    newSerie,
    newNroCargador,
    newCapacidadCargador,
    newCapacidadTambor,
  ]) => {
    formStore.actualizarCampo('cod_registro', newCod)
    formStore.actualizarCampo('calibre', newCalibre)
    formStore.actualizarCampo('acabado', newAcabado)
    formStore.actualizarCampo('serie', newSerie)
    formStore.actualizarCampo('nro_cargador', newNroCargador)
    formStore.actualizarCampo('capacidad_cargador', newCapacidadCargador)
    formStore.actualizarCampo('capacidad_tambor', newCapacidadTambor)
  },
)
</script>
