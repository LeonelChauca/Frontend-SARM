<template>
  <Dialog
    :visible="dialogVisible"
    @update:visible="emit('update:dialogVisible', $event)"
    :header="`Editar Arma`"
    class="w-[100%] lg:w-[60%]"
    modal
    :closable="true"
    :draggable="false"
  >
    <template #header>
      <div class="w-full border-l-[4px] border-orange-500">
        <hr class="bg-orange-500 h-[4px]" />
        <h3 class="px-4 font-semibold text-2xl uppercase py-4">
          Editar {{ tipo }}
        </h3>
      </div>
    </template>
    <div class="flex flex-col items-center justify-center">
      <CreateDatosModelo
        ref="marcaModeloRef"
        :data="{
          id_marca: data.marca.id_marca,
          id_modelo: data.modelo.id_modelo,
        }"
      />
      <CreateDatosArticulo
        ref="datosArticuloRef"
        :data="{
          fecha_registro: data.fecha_registro,
          procedencia: data.procedencia,
          industria: data.industria,
          id_estado_fisico: data.estado_fisico.id_estado_fisico,
          id_estado_logico: data.estado_logico.id_estado_logico,
          id_tipo_articulo: data.estado_logico.tipo,
        }"
      />
      <CreateDatosArma
        v-if="tipo === 'Arma'"
        ref="datosArmaRef"
        :data="{
          cod_registro: data.cod_registro,
          calibre: data.calibre,
          nro_cargador: data.nro_cargador,
          capacidad_cargador: data.capacidad_cargador,
          capacidad_tambor: data.capacidad_tambor,
          acabado: data.acabado,
          serie: data.serie,
        }"
      />
      <CreateDatosEquipo
        v-else
        ref="datosEquipoRef"
        :data="{
          cod_registro: data.cod_registro,
        }"
      />
    </div>
    <div class="w-full flex justify-end">
      <Button
        :loading="loadingEdit"
        label="Guardar Cambios"
        icon="pi pi-check"
        @click="submitEdits"
      />
    </div>
  </Dialog>
</template>
<script setup>
import { useArma } from '../composables/useArma'
import CreateDatosArma from './CreateDatosArma.vue'
import CreateDatosArticulo from './CreateDatosArticulo.vue'
import CreateDatosModelo from './CreateMarcaModelo.vue'
import CreateDatosEquipo from './CreateDatosEquipo.vue'
import { showToast, showError } from '../helpers/Toast'

import { useFormStore } from '../store/formStore'
import { ref } from 'vue'
import { useEquipo } from '../composables/useEquipo'
const props = defineProps({
  data: Object,
  dialogVisible: Boolean,
  tipo: String,
})

console.log('tipooooo', props.tipo)
const data_final = useFormStore()
// Referencias de Componentes Hijos
const marcaModeloRef = ref(null)
const datosArticuloRef = ref(null)
const datosArmaRef = ref(null)
const datosEquipoRef = ref(null)
//const datosEquipoRef = ref(null)

const { EditArma, responseEdit, loadingEdit } = useArma()
const { EditEquipo, responseEquipoEdit, loadingEquipoEdit, errorEquipoEdit } =
  useEquipo()

const emit = defineEmits(['update:dialogVisible'])

const submitEdits = async () => {
  try {
    const isValid = await isValidateAll()
    if (!isValid) return showError('Error datos no actualizados.!')

    switch (props.tipo) {
      case 'Arma':
        await EditArma(props.data.id_articulo, data_final.getDataArma())
        break
      case 'Equipo':
        console.log(
          'entro a equipo',
          props.data.id_articulo,
          data_final.getDataEquipo(),
        )
        await EditEquipo(props.data.id_articulo, data_final.getDataEquipo())
        console.log(errorEquipoEdit.value)
        break
    }

    if (
      responseEdit.value.status === 200 ||
      responseEquipoEdit.value.status === 200
    ) {
      showToast('Datos Actualizados correctamente')
      emit('update:dialogVisible', false)
    } else {
      showError('Error al actualizar los datos.')
    }
  } catch (error) {
    showError('Error inesperado. Intente nuevamente.')
    console.error(error)
  }
}

const isValidateAll = async () => {
  const validations = [
    marcaModeloRef.value?.validateForm(),
    datosArticuloRef.value?.validateForm(),
    props.tipo === 'Arma'
      ? datosArmaRef.value?.validateForm()
      : datosEquipoRef.value?.validateForm(),
  ]
  const results = await Promise.all(validations)
  return results.every(result => result)
}
</script>
