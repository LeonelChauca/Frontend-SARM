<template>
  <div class="card">
    <component
      :is="TypeComponent"
      :value="tableData"
      :paginator="paginator"
      :rows="paginator ? rows : null"
      :rowsPerPageOptions="paginator ? [5, 10, 15] : null"
      :tableStyle="paginator ? '' : ''"
      dataKey="id"
    >
      <Column
        v-for="(col, index) in columns"
        :key="index"
        :field="col.field"
        :header="col.header"
      >
        <template #body="slotProps">
          <template v-if="loading || data.length === 0">
            <Skeleton />
          </template>
          <span v-else>{{ slotProps.data[col.field] }}</span>
        </template>
      </Column>
      <Column header="Acciones">
        <template #body="slotProps">
          <template v-if="loading || data.length === 0">
            <Skeleton />
          </template>
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
import { computed } from 'vue'
import DataTable from 'primevue/datatable'
import TreeTable from 'primevue/treetable'

const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  emmitCambio: Boolean,
  onDelete: {
    type: Function,
    required: true,
  },
  responseDelete: {
    type: Object,
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

const emit = defineEmits(['cambios'])

const handleDelete = async value => {
  console.log(value)
  await props.onDelete(value)
  if (!props.responseDelete) return
  emit('cambios', !props.emmitCambio)
}

const tableData = computed(() =>
  props.data.length > 0
    ? props.data.map((item, index) => ({ ...item, id: item.id || index }))
    : new Array(5).fill({}).map((_, index) => ({ id: index })),
)
const TypeComponent = computed(() => (props.paginator ? TreeTable : DataTable))
</script>
