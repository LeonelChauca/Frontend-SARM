<template>
  <div class="flex gap-3">
    <Button
      type="button"
      icon="pi pi-trash"
      class="p-button-delete"
      @click="confirmDelete(data.id_articulo)"
      size="small"
    />
    <!-- Botón para editar -->
    <Button
      type="button"
      icon="pi pi-pencil"
      class="p-button-edit"
      @click="handleEdit(data.id_articulo)"
      size="small"
    />
  </div>
</template>
<script setup>
import Button from 'primevue/button'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'

const confirm = useConfirm()
const toast = useToast()
const props = defineProps({
  data: Object,
  deleteApi: Function,
  emmitCambio: Boolean,
  emit: Function,
  responseDelete: Object,
})

const handleDelete = async value => {
  console.log(value)
  await props.deleteApi(value)
  if (!props.responseDelete) return
  props.emit('cambios', !props.emmitCambio)
}
//editar
const handleEdit = async value => {
  console.log(value)
}

//funciones de dialog confirmacion

const confirmDelete = data => {
  confirm.require({
    message: '¿Estás seguro de que deseas eliminar esta fila?',
    header: 'Advertencia !',
    icon: 'pi pi-info-circle',
    rejectLabel: 'Cancel',
    rejectProps: {
      label: 'Cancel',
      severity: 'secondary',
      outlined: true,
    },
    acceptProps: {
      label: 'Delete',
      severity: 'danger',
    },
    accept: async () => {
      await handleDelete(data)
      toast.add({
        severity: 'success',
        summary: 'Confirmado',
        detail: 'Se elimino la fila seleccionada',
        life: 3000,
      })
    },
    reject: () => {
      toast.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'You have rejected',
        life: 3000,
      })
    },
  })
}
</script>
