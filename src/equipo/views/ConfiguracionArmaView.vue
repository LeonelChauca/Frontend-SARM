<template>
  <TemplateComponent>
    <main class="flex w=[100%] mx-auto mt-5">
      <section class="flex gap-6 w-full justify-center">
        <CardComponent
          title="total de armas"
          :value="countArmas"
          color="bg-green-600"
        />
        <CardComponent title="total de armas" :value="0" color="bg-blue-400" />
        <CardComponent title="total de armas" :value="0" color="bg-red-500" />
      </section>
      <section></section>
    </main>
    <section class="my-10">
      <Button
        size="medium"
        label="Agregar Arma"
        severity="warn"
        icon="pi pi-plus"
        @click="dialogVisible = true"
      />
    </section>
    <section>
      <TableArticulo
        :columns="dataArmas"
        :data="data"
        :paginator="true"
        :rows="5"
        :loading="loadingGet"
        :onDelete="DeleteArma"
        :emmitCambio="swcambios"
        :responseDelete="responseDelete"
        @cambios="swcambios = $event"
        tipo="Arma"
      />
    </section>
  </TemplateComponent>
  <DialogRegistrarArticulo
    :dialogVisible="dialogVisible"
    @update:dialogVisible="dialogVisible = $event"
    tipo="Arma"
  />
</template>
<script setup>
import TemplateComponent from '@/equipo/componentes/TemplateComponent.vue'
import TableArticulo from '@/equipo/componentes/TableArticulo.vue'
import CardComponent from '@/equipo/componentes/CardComponent.vue'
import DialogRegistrarArticulo from '../componentes/DialogRegistrarArticulo.vue'
import { ref, watch } from 'vue'
import { dataArmas } from '../helpers/dataColumns'
import { useArma } from '../composables/useArma'

const dialogVisible = ref(false)
const data = ref([])
const countArmas = ref(0)
const swcambios = ref(false)
const { responseGet, loadingGet, GetArma, DeleteArma, responseDelete } =
  useArma()

watch(
  swcambios,
  async () => {
    await GetArma()
    data.value = responseGet.value
    countArmas.value = data.value.length
  },
  { immediate: true },
)
</script>
