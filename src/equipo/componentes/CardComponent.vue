<template>
  <div
    :class="[
      'w-[280px]',
      'p-4',
      color,
      'shadow-custom flex flex-col  justify-start gap-4 items-center',
      'bg-white',
      'h-30',
    ]"
  >
    <div class="text-center text-2xl font-semibold">
      <h1 class="uppercase">{{ title }}</h1>
    </div>
    <div class="text-center text-3xl font-bold font-sans">
      <count-up :end-val="value"></count-up>
    </div>
  </div>
</template>

<script setup>
import CountUp from 'vue-countup-v3'

const props = defineProps({
  title: String,
  value: Number,
  color: String,
})
</script>
