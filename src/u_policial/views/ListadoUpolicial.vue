<template>
  <TemplateComponent>
    <div class="w-[95%] mx-auto">
      <h3 class="font-bold text-2xl">Listado de Unidades Policiales</h3>
    </div>
    <div class="w-full">
      <TableArticulo
        :columns="u_policialcoldata"
        :data="dataUpolicial"
        :loading="loadingGet"
        :paginator="true"
        :acciones="false"
      />
    </div>
  </TemplateComponent>
</template>
<script setup lang="ts">
import TableArticulo from '@/equipo/componentes/TableArticulo.vue'
import TemplateComponent from '@/equipo/componentes/TemplateComponent.vue'
import { u_policialcoldata } from '../helpers/u_policialcoldata'
import { useUpolicial } from '../composables/useUpolicial'
import { ref, onMounted } from 'vue'

const dataUpolicial = ref([])
const { responseGet, loadingGet, getUnidadPolicial } = useUpolicial()

onMounted(async () => {
  await getUnidadPolicial()
  dataUpolicial.value = responseGet.value
})
</script>
