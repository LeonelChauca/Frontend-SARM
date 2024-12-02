<template>
  <TemplateComponent>
    <main class="flex w=[90%] mx-auto mt-5">
      <section class="flex gap-6 w-full justify-center">
        <CardComponent
          title="total de Equipo"
          :value="countEquipo"
          color="bg-green-600"
        />
        <CardComponent title="total de Equipo" :value="0" color="bg-blue-400" />
        <CardComponent title="total de Equipo" :value="0" color="bg-red-500" />
      </section>
      <section></section>
    </main>
    <section class="my-10">
      <Button
        size="medium"
        label="Agregar Equipo"
        severity="warn"
        icon="pi pi-plus"
        @click="dialogVisible = true"
      />
    </section>

    <section>
      <TableArticulo
        :columns="dataEquipo"
        :data="data"
        :paginator="true"
        :rows="5"
        :loading="loadingGet"
        :onDelete="DeleteEquipo"
        :emmitCambio="swcambios"
        :responseDelete="responseDelete"
        @cambios="swcambios = $event"
      />
    </section>
  </TemplateComponent>
  <DialogRegistrarArticulo
    :dialogVisible="dialogVisible"
    @update:dialogVisible="dialogVisible = $event"
    tipo="Equipo"
  />
</template>
<script setup>
import { dataEquipo } from '../helpers/dataColumns'
import TemplateComponent from '@/equipo/componentes/TemplateComponent.vue'
import CardComponent from '@/equipo/componentes/CardComponent.vue'
import DialogRegistrarArticulo from '../componentes/DialogRegistrarArticulo.vue'
import { ref, watch } from 'vue'
import { useEquipo } from '../composables/useEquipo'
import TableArticulo from '../componentes/TableArticulo.vue'
const dialogVisible = ref(false)
const data = ref([])
const countEquipo = ref(0)
const swcambios = ref(false)
const { responseGet, responseDelete, loadingGet, GetEquipo, DeleteEquipo } =
  useEquipo()

watch(
  swcambios,
  async () => {
    await GetEquipo()
    data.value = responseGet.value
    countEquipo.value = data.value.length
  },
  { immediate: true },
)
</script>
