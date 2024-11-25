<template>
  <div class="w-[90%] mx-auto h-full">
    <h3 class="font-semibold">Registro de Marca y Modelo</h3>
    <form
      class="w-full flex flex-col items-center sm:items-start sm:flex-row gap-8 sm:justify-between lg:w-[90%] mx-auto my-3"
      @submit.prevent="validarStep"
    >
      <!-- Marca -->
      <div class="flex flex-col w-[280px] gap-1 h-[70px]">
        <label for="id_marca" class="text-sm font-semibold"
          >Nombre de la marca:</label
        >
        <Select
          id="id_marca"
          v-model="id_marca"
          :options="optionsMarca"
          option-value="id_marca"
          optionLabel="nombre_marca"
          placeholder="Selecciona una opción"
          size="small"
        />
        <small class="text-xs text-red-500">
          <ErrorMessage name="id_marca" />
        </small>
      </div>

      <!-- Modelo -->
      <div class="flex flex-col w-[280px] gap-1 h-[70px]">
        <label for="id_modelo" class="text-sm font-semibold"
          >Nombre del Modelo:</label
        >
        <Select
          id="id_modelo"
          v-model="id_modelo"
          :options="optionsModelo"
          option-value="id_modelo"
          optionLabel="nombre_modelo"
          placeholder="Selecciona una opción"
          size="small"
        />
        <small class="text-xs text-red-500">
          <ErrorMessage name="id_modelo" />
        </small>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useForm, ErrorMessage, useField } from 'vee-validate'
import { useOptionFormStore } from '../store/optionFormStore'
import { useFormStore } from '../store/formStore'
import { validateRegistroMarcaModelo } from '../helpers/yupValidations'
// Almacén de opciones
const optionFormStore = useOptionFormStore()
const { modelo, marca } = optionFormStore
// Opciones para los selects
const optionsMarca = ref([...marca.value])
const optionsModelo = ref([...modelo.value])
// Emitir validez al componente padre
const emit = defineEmits(['valid'])

// Configuración del formulario
const { validate, resetForm } = useForm({
  validationSchema: validateRegistroMarcaModelo,
  initialValues: {
    id_marca: 0,
    id_modelo: 0,
  },
})

// Vincular campos individuales
const { value: id_marca } = useField('id_marca')
const { value: id_modelo } = useField('id_modelo')

// Método para validar el formulario
const validarStep = async () => {
  const isValid = await validate()
  if (isValid) {
    emit('valid', true)
  }
}

defineExpose({
  validateForm: async () => {
    const isValid = await validate()
    return isValid
  },
  borrarDatosFormMarcaModelo: () => {
    resetForm()
  },
})

const formStore = useFormStore()
watch([id_marca, id_modelo], ([newMarca, newModelo]) => {
  formStore.actualizarCampo('id_marca', newMarca)
  formStore.actualizarCampo('id_modelo', newModelo)
})
watch(
  () => formStore.formData,
  newData => {
    console.log('Estado Global Actualizado:', newData)
  },
  { deep: true }, // Necesario para observar cambios en objetos anidados
)
</script>
