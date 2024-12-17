<template>
  <Dialog
    :visible="dialogVisible"
    @update:visible="emit('update:dialogVisible', $event)"
    :header="`Registrar ${tipo}`"
    class="w-[100%] lg:w-[70%]"
    modal
    :closable="true"
    :draggable="false"
  >
    <Stepper :value="currentStep.toString()" linear>
      <StepList>
        <Step value="1">Marca y Modelo</Step>
        <Step value="2">Datos Principales</Step>
        <Step value="3">Datos del {{ tipo }}</Step>
      </StepList>
      <StepPanels>
        <!-- Paso 1 -->
        <StepPanel value="1">
          <CreateMarcaModelo ref="marcaModeloRef" />
        </StepPanel>
        <!-- Paso 2 -->
        <StepPanel value="2">
          <CreateDatosArticulo ref="datosArticuloRef" />
        </StepPanel>
        <!-- Paso 3 -->
        <StepPanel value="3" v-if="tipo === 'Arma'">
          <CreateDatosArma ref="datosArmaRef" />
        </StepPanel>

        <StepPanel value="3" v-else>
          <CreateDatosEquipo ref="datosEquipoRef" />
        </StepPanel>
      </StepPanels>
    </Stepper>

    <div class="flex justify-between mt-4">
      <!-- Botón Atrás -->
      <Button
        label="Atrás"
        severity="secondary"
        icon="pi pi-arrow-left"
        @click="prevStep"
        :disabled="currentStep === 1"
      />
      <!-- Botón Siguiente -->
      <Button
        v-if="currentStep !== totalSteps"
        label="Siguiente"
        icon="pi pi-arrow-right"
        iconPos="right"
        @click="handleNextStep"
      />
      <Button
        v-else
        label="Enviar"
        :loading="loading"
        icon="pi pi-check"
        @click="submitForm"
      />
    </div>
  </Dialog>
  <Toaster richColors />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useOptionFormStore } from '../store/optionFormStore'
import CreateDatosArma from './CreateDatosArma.vue'
import CreateDatosArticulo from './CreateDatosArticulo.vue'
import CreateMarcaModelo from './CreateMarcaModelo.vue'
import CreateDatosEquipo from './CreateDatosEquipo.vue'
import { useArma } from '../composables/useArma'
import { useFormStore } from '../store/formStore'
import { Toaster } from 'vue-sonner'
import { showToast, showError } from '../helpers/Toast'
import { useEquipo } from '../composables/useEquipo'
// Props y Emisiones
const props = defineProps({
  dialogVisible: Boolean,
  tipo: String,
})
const emit = defineEmits(['update:dialogVisible'])

// Referencias de Componentes Hijos
const marcaModeloRef = ref(null)
const datosArticuloRef = ref(null)
const datosArmaRef = ref(null)
const datosEquipoRef = ref(null)

// Estado de Pasos
const currentStep = ref(1)
const totalSteps = 3
// Almacenamiento con Pinia
const optionFormStore = useOptionFormStore()
const data = useFormStore()
// Validar Datos al Cambiar Paso
const handleNextStep = async () => {
  let isValid = false

  switch (currentStep.value) {
    case 1:
      isValid = await marcaModeloRef.value?.validateForm()
      break
    case 2:
      isValid = await datosArticuloRef.value?.validateForm()
      break
    case 3:
      if (props.tipo === 'Arma') {
        isValid = await datosArmaRef.value?.validateForm()
      } else {
        isValid = await datosEquipoRef.value?.validateForm()
      }
      break
  }
  if (isValid.valid) {
    nextStep()
  } else {
    console.error(`Errores en los datos del paso ${currentStep.value}.`)
  }
}

// Ir al Siguiente Paso
const nextStep = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value += 1
  }
}
// Regresar al Paso Anterior
const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value -= 1
  }
}

const { response, SendArma, loading } = useArma()
const { response_equipo, SendEquipo } = useEquipo()
// Enviar el Formulario
const submitForm = async () => {
  let isValid
  switch (props.tipo) {
    case 'Arma':
      isValid = await datosArmaRef.value?.validateForm()
      if (isValid) {
        console.log('holaaafinall;', data.getDataArma())
        await SendArma(data.getDataArma())
      } else {
        showError('Error datos no validos en el articulo. !')
      }
      break
    case 'Equipo':
      isValid = await datosEquipoRef.value?.validateForm()
      if (isValid) {
        await SendEquipo(data.getDataEquipo())
      } else {
        showError('Error datos no validos en el articulo. !')
      }
  }
  if (response.value.status === 201 || response_equipo.value.status === 201) {
    BorrarDatosFormAll()
    data.limpiarFormulario()
    currentStep.value = 1
    showToast('Artículo registrado correctamente. !')
  }
}

const BorrarDatosFormAll = () => {
  marcaModeloRef.value?.borrarDatosFormMarcaModelo()
  datosArticuloRef.value?.borrarDatosFormArticulo()
  datosArmaRef.value?.borrarDatosFormArma()
  datosEquipoRef.value?.borrarDatosFormEquipo()
}

// Fetch de Opciones al Montar
onMounted(async () => {
  await optionFormStore.fetchOptions(props.tipo.toLowerCase())
})
</script>
