<template>
  <Card style="width: 17rem; overflow: hidden">
    <template #header>
      <img alt="header" :src="img" class="w-full h-48 object-cover" />
    </template>
    <template #title>{{ props.title }}</template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button
          label="Ver"
          class="w-full p-button-sm"
          @click="navigateToUrl(urlBoton)"
        />
      </div>
    </template>
  </Card>
</template>
<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  title: String,
  img: String,
  urlBoton: String,
})

const router = useRouter()

function navigateToUrl(url) {
  router.push(url)
}
</script>
