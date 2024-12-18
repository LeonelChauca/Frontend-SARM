<template>
  <div class="w-full flex justify-center">
    <div
      class="border-l-8 hover:shadow-2xl border-l-green-600 relative bg-cover bg-center py-16 w-[300px] h-[500px] cursor-pointer hover:scale-105 transition-all"
      :style="`background-image: url('${img}') `"
    >
      <div
        class="absolute inset-0 flex items-end py-[80px] justify-center bg-black bg-opacity-50"
      >
        <h1 class="text-white text-2xl font-bold uppercase">
          {{ props.title }}
        </h1>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  img: String,
  urlBoton: String,
})

//const router = useRouter()

// function navigateToUrl(url) {
//   router.push(url)
// }
</script>
