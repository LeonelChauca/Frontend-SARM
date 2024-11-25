<template>
  <div
    v-if="isMainRoute"
    class="w-[85%] mx-auto mt-16 flex gap-10 flex-wrap flex-row justify-center"
  >
    <BoxComponent
      v-for="dtBox in dataBox"
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
import { dataBox } from '../helpers/dataBox'
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

const isMainRoute = computed(
  () => route.path === '/dashboard/configuracionEquipo',
)
function navigateTo(url) {
  router.push(url)
}
</script>
