<template>
  <div class="card">
    <component
      :is="DataTable"
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
          <Button
            v-else
            type="button"
            icon="pi pi-trash"
            class="p-button-danger"
            @click="handleDelete(slotProps.data.id)"
            size="small"
          />
        </template>
      </Column>
    </component>
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import DataTable from 'primevue/datatable'
import TreeTable from 'primevue/treetable'
import Button from 'primevue/button'
import Skeleton from 'primevue/skeleton'
import { ref } from 'vue'

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
})

// Emitir cambios tras eliminar un elemento
const emit = defineEmits(['cambios'])
const rowsReactive = ref(props.rows)

const handleDelete = async value => {
  console.log(value)
  await props.onDelete(value)
  if (!props.responseDelete) return
  emit('cambios', !props.emmitCambio)
}
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

// Seleccionar el tipo de componente
const TypeComponent = computed(() => (props.paginator ? TreeTable : DataTable))
</script>
