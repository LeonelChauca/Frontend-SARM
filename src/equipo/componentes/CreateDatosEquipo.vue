<template>
  <div class="w-[90%] mx-auto h-full">
    <h3 class="font-semibold">Datos del Equipo</h3>
    <form
      class="w-full flex flex-col flex-wrap items-center sm:items-start sm:flex-row gap-4 lg:w-[90%] mx-auto my-3"
    >
      <div class="flex flex-col w-[230px] gap-3">
        <label for="code_registro_arma" class="text-sm"
          >Código de registro de arma</label
        >
        <InputGroup>
          <InputText
            class="h-8"
            placeholder="Código de registro"
            id="cod_registro"
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
    </form>
  </div>
</template>
<script setup>
import { watch } from 'vue'
import { useForm, useField, ErrorMessage } from 'vee-validate'
import { validateArticuloEquipo } from '../helpers/yupValidations'
import { useFormStore } from '../store/formStore'
const { validate, resetForm } = useForm({
  validationSchema: validateArticuloEquipo,
  initialValues: {
    cod_registro: '',
  },
})

defineExpose({
  validateForm: async () => {
    const isValid = await validate()
    console.log(isValid.valid)
    return isValid.valid
  },

  borrarDatosFormEquipo: () => {
    resetForm()
  },
})

const { value: cod_registro } = useField('cod_registro')
const formStore = useFormStore()

watch([cod_registro], ([newCod_registro]) => {
  formStore.actualizarCampo('cod_registro', newCod_registro)
})
</script>
