<template>
  <div class="w-[85%] mx-auto my-3">
    <main class="flex w=[90%] mx-auto mt-5">
      <section class="flex gap-6 w-full justify-center">
        <CardComponent
          title="total de armas"
          value="1234"
          color="bg-green-600"
        />
        <CardComponent
          title="total de armas"
          value="1234"
          color="bg-blue-400"
        />
        <CardComponent title="total de armas" value="1234" color="bg-red-500" />
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
  </div>
  <DialogRegistrarArticulo
    :dialogVisible="dialogVisible"
    @update:dialogVisible="dialogVisible = $event"
  />
</template>
<script setup>
import CardComponent from '@/equipo/componentes/CardComponent.vue'
import DialogRegistrarArticulo from '../componentes/DialogRegistrarArticulo.vue'
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>
