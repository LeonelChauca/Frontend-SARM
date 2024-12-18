<template>
  <div class="w-[85%] mx-auto my-3">
    <h2 class="text-3xl font-bold">Marca</h2>
    <main class="flex flex-row">
      <section class="w-[40%]">
        <form :onsubmit="handleSubmit(onSubmit)" class="w-[70%] mx-auto my-4">
          <div class="flex flex-col gap-1 h-[80px]">
            <label for="nombre_marca" class="text-sm">Nombre</label>
            <InputText
              v-model="nombre_marca"
              id="nombre_marca"
              aria-describedby="username-help"
              placeholder="Nombre de la marca"
              size="small"
            />
            <small id="username-help" class="text-neutral-500">{{
              nombreError
            }}</small>
          </div>
          <div class="flex flex-col gap-1 h-[80px]">
            <label for="tipo" class="text-sm">La marca será para:</label>
            <Select
              id="tipo"
              v-model="tipo"
              :options="dataSelect"
              :option-value="option => option.code"
              optionLabel="nombre"
              placeholder="Selecciona una opción"
              class="w-full"
              size="small"
            />
            <small class="text-neutral-500">{{ tipoError }}</small>
          </div>
          <div class="w-full my-2">
            <Button
              type="submit"
              :loading="loading"
              label="Enviar"
              severity="primary"
              class="w-full"
              size="small"
            />
          </div>
        </form>
      </section>
      <section class="w-[40%] mx-auto">
        <CTableComponent
          :data="data"
          :columns="[
            { field: 'nombre_marca', header: 'Nombre de Marca' },
            { field: 'tipo', header: 'Tipo de Marca' },
          ]"
          :loading="loadingGet"
          :emmitCambio="sw_cambios"
          :onDelete="DeleteMarca"
          :responseDelete="responseDelete"
          @cambios="sw_cambios = $event"
        />
      </section>
    </main>
  </div>
</template>

<script setup>
import { useForm, useField } from 'vee-validate'
import { ref, watch } from 'vue'
import { dataSelect } from '../helpers/dataSelect'
import { validateMarca } from '../helpers/yupValidations'
import { useMarca } from '../composables/useMarca'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import CTableComponent from '../componentes/CTableComponent.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const {
  error,
  loading,
  SendMarca,
  responseGet,
  loadingGet,
  GetMarca,
  DeleteMarca,
  responseDelete,
} = useMarca()

const data = ref([])
const sw_cambios = ref(false)

const { handleSubmit } = useForm({
  validationSchema: validateMarca,
})

const { value: nombre_marca, errorMessage: nombreError } =
  useField('nombre_marca')
const { value: tipo, errorMessage: tipoError } = useField('tipo')

watch(
  sw_cambios,
  async () => {
    await GetMarca(route.query.type)
    data.value = responseGet.value.map(value => {
      return {
        nombre_marca: value.nombre_marca,
        tipo: value.tipo === 1 ? 'arma' : value.tipo === 2 ? 'equipo' : 'ambos',
        id: value.id_marca,
      }
    })
  },
  { immediate: true },
)

const onSubmit = async values => {
  await SendMarca(values)
  if (error.value === null) {
    console.log('error es null')
    sw_cambios.value = !sw_cambios.value
  }
  console.log('error: ', error.value)
}
</script>
