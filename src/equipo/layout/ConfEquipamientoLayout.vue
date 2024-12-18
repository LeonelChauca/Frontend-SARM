<template>
  <div
    v-if="isMainRoute"
    class="w-[85%] mx-auto mt-16 flex md:justify-evenly md:flex-row gap-3 flex-col"
  >
    <BoxComponent
      v-for="dtBox in dataEquipoConfig"
      :key="dtBox.id"
      :title="dtBox.titulo"
      :img="dtBox.img"
      :urlBoton="dtBox.urlBoton"
      @click="navigateTo(dtBox.urlBoton)"
    />
  </div>
  <router-view v-else></router-view>
</template>

<script setup>
import BoxComponent from '../componentes/boxComponent.vue'
import { dataEquipoConfig } from '../helpers/dataEquipoConfig'
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

const isMainRoute = computed(
  () => route.path === '/dashboard/configuracionEquipo/equipo',
)
function navigateTo(url) {
  router.push({ path: url, query: { type: 'equipo' } })
}
</script>
