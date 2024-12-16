<template>
  <div class="card">
    <DataTable
      :value="tableData"
      :paginator="paginator"
      :rows="paginator ? rowsReactive : null"
      :rowsPerPageOptions="paginator ? [5, 10, 15] : null"
      :tableStyle="paginator && 'min-width: 50rem'"
      @update:rows="onRowsChange"
      :loading="loading"
      dataKey="id"
      stripedRows
    >
      <!-- Mostrar todas las columnas, pero controlar la visibilidad con estilos -->
      <Column
        v-for="(col, index) in columns"
        :key="index"
        :field="col.Field"
        :header="col.header"
        :style="!col.visible ? { display: 'none' } : { width: col.size }"
        sortable
      >
        <template #body="slotProps">
          <template v-if="loading || data.length === 0">
            <Skeleton />
          </template>
          <span v-else-if="slotProps.data[col.Field] != ''">{{
            slotProps.data[col.Field]
          }}</span>
          <span v-else>N/A</span>
        </template>
      </Column>

      <!-- Columna de acciones -->
      <Column header="Acciones">
        <template #body="slotProps">
          <template v-if="loading || data.length === 0">
            <Skeleton />
          </template>
          <!-- Botón para eliminar -->
          <ButtonTableComponent
            v-else
            :deleteApi="onDelete"
            :data="slotProps.data"
            :emmitCambio="emmitCambio"
            :responseDelete="responseDelete"
            :emit="emit"
            :tipo="tipo"
          />
        </template>
      </Column>
    </DataTable>
    <ConfirmDialog></ConfirmDialog>
    <Toast />
  </div>
</template>

<script setup>
import ConfirmDialog from 'primevue/confirmdialog'
import { computed, watchEffect } from 'vue'
import DataTable from 'primevue/datatable'
import Skeleton from 'primevue/skeleton'
import { ref } from 'vue'
import ButtonTableComponent from './ButtonTableComponent.vue'
const props = defineProps({
  columns: {
    type: Array,
    required: true,
    default: () => [],
  },
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  emmitCambio: Boolean,
  onDelete: {
    type: Function,
    required: false,
    default: () => {},
  },
  responseDelete: {
    type: Object,
    required: false,
    default: null,
  },
  paginator: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: Number,
    default: 5,
  },
  tipo: {
    type: String,
    default: 'Arma',
  },
})
// Emitir cambios tras eliminar un elemento
const emit = defineEmits(['cambios'])
const rowsReactive = ref(props.rows)
// Mantener todos los datos en tableData
const tableData = computed(() => {
  if (props.data.length > 0) {
    return props.data.map((item, index) => ({ ...item, id: item.id || index }))
  }
  return new Array(rowsReactive.value)
    .fill({})
    .map((_, index) => ({ id: index }))
})

const onRowsChange = newRows => {
  rowsReactive.value = newRows
}

//imprimir tabledata cada vez que cambia
watchEffect(() => {
  console.log('este es', tableData.value)
})
</script>
