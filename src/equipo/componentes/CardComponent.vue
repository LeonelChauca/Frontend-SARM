<template>
  <div :class="['w-[280px]', 'p-4', color, 'shadow-custom', 'bg-green-600']">
    <div class="text-center text-xl font-semibold">
      <h1 class="uppercase">{{ title }}</h1>
    </div>
    <div class="text-center text-xl font-normal">
      <h2>{{ value }}</h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  value: String,
  color: String,
})
</script>
