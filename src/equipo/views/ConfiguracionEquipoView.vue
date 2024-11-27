<template>
  <TemplateComponent>
    <main class="flex w=[90%] mx-auto mt-5">
      <section class="flex gap-6 w-full justify-center">
        <CardComponent
          title="total de Equipo"
          :value="0"
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
  </TemplateComponent>
  <DialogRegistrarArticulo
    :dialogVisible="dialogVisible"
    @update:dialogVisible="dialogVisible = $event"
    tipo="Equipo"
  />
</template>
<script setup>
import TemplateComponent from '@/equipo/componentes/TemplateComponent.vue'
import CardComponent from '@/equipo/componentes/CardComponent.vue'
import DialogRegistrarArticulo from '../componentes/DialogRegistrarArticulo.vue'
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>
