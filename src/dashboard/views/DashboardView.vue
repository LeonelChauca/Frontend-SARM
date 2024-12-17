<template>
  <SideBar />
  <main>
    <div class="w-[97%] flex justify-end">
      <Breadcrumb
        :home="home"
        :model="breadCrumb"
        style="background-color: transparent"
      />
    </div>
    <router-view />
  </main>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SideBar from '../components/SideBar.vue'
import { breadCrumbData } from '../helpers/breadCrumbData'

const home = ref({
  icon: 'pi pi-home',
  url: '/dashboard',
})

const breadCrumb = ref([])

const route = useRoute()
watch(
  () => route.fullPath,
  () => {
    breadCrumb.value = breadCrumbData.filter(
      item => route.fullPath.startsWith(item.url),
      console.log('route.fullPath', route.fullPath),
    )
    console.log('breadCrumb', breadCrumb.value)
  },
  { immediate: true },
)
</script>
