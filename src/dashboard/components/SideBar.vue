<template>
  <div
    class="card flex justify-start w-[95%] mx-auto h-[90px] border-b-2 items-center"
  >
    <Drawer v-model:visible="visible">
      <template #container="{ closeCallback }">
        <div class="flex flex-col h-full">
          <div class="flex items-center justify-between px-6 pt-4 shrink-0">
            <span class="inline-flex items-center gap-2">
              <span class="font-semibold text-2xl text-primary">SDEP</span>
            </span>
            <span>
              <Button
                type="button"
                @click="closeCallback"
                icon="pi pi-times"
                rounded
                outlined
              ></Button>
            </span>
          </div>
          <div class="overflow-y-auto">
            <ul
              class="list-none px-4 m-0"
              v-for="dsdat in dashboardPrueba"
              :key="dsdat.id"
            >
              <li>
                <div
                  v-ripple
                  v-styleclass="{
                    selector: '@next',
                    enterFromClass: 'hidden',
                    enterActiveClass: 'animate-slidedown',
                    leaveToClass: 'hidden',
                    leaveActiveClass: 'animate-slideup',
                  }"
                  class="p-4 flex items-center justify-between text-surface-500 dark:text-surface-400 cursor-pointer p-ripple"
                >
                  <span class="font-medium">{{ dsdat.nombre }}</span>
                  <i class="pi pi-chevron-down"></i>
                </div>
                <ul class="list-none p-0 m-0 overflow-hidden">
                  <li v-for="rthija in dsdat.rutasHijas" :key="rthija.id">
                    <a
                      @click="goRoute(rthija.ruta)"
                      v-ripple
                      class="flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple"
                    >
                      <i :class="[rthija.icono, 'mr-2']"></i>
                      <span class="font-medium">{{ rthija.nombre }}</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <hr
              class="mb-4 mx-4 border-t border-0 border-surface-200 dark:border-surface-700"
            />
            <a
              v-ripple
              class="m-4 flex items-center cursor-pointer p-4 gap-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple"
            >
              <Avatar
                image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                shape="circle"
              />
              <span class="font-bold">Leo 200</span>
            </a>
          </div>
        </div>
      </template>
    </Drawer>
    <div class="">
      <Button icon="pi pi-bars" @click="visible = true" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { dashboardPrueba } from '../helpers/jdata.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const visible = ref(false)

const goRoute = ruta => {
  router.push('/dashboard' + ruta)
}
</script>
