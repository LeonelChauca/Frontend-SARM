<template>
  <Dialog
    v-model:visible="localVisible"
    modal
    :closable="false"
    header="Autenticacion 2FA"
    class="max-w-[400px]"
  >
    <span class="text-surface-500 dark:text-surface-400 block mb-8"
      >Se envió un código único a su correo para poder iniciar sesión</span
    >
    <div class="flex flex-col items-center gap-4 mb-4 justify-center">
      <InputOtp v-model="inputCode" :length="6" />
      <small id="username-help" class="text-neutral-500">{{ errCode }} </small>
    </div>
    <div class="flex justify-between gap-2">
      <div class="flex items-center">
        <Button
          label="Resend Code"
          link
          class="p-0"
          :style="{ color: '#0a0a0a' }"
        ></Button>
      </div>
      <div>
        <Button
          type="button"
          label="Cancel"
          severity="secondary"
          @click="closeDialog"
        ></Button>
        <Button
          type="button"
          label="Save"
          @click="submitCode"
          :loading="loading"
        ></Button>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import Dialog from 'primevue/dialog'
import InputOtp from 'primevue/inputotp'
import Button from 'primevue/button'
import { ref, watch } from 'vue'
import { use2FA } from '../composables/use2FA'
import { f2acodeSchema } from '../helpers/yupValidations'

const { response, loading, error, codeVerify2FA } = use2FA()
const inputCode = ref('')
const errCode = ref('')

// Definir la prop y el evento
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  idLog: {
    type: String,
    requided: true,
  },
})
const emit = defineEmits(['update:modelValue'])

const localVisible = ref(props.modelValue)
watch(
  () => props.modelValue,
  newVal => {
    localVisible.value = newVal
  },
)
const closeDialog = () => {
  localVisible.value = false
  emit('update:modelValue', false)
}

const submitCode = async () => {
  const CodeAsObject = { token: inputCode.value, id: props.idLog }
  try {
    await f2acodeSchema.validate(CodeAsObject)
    errCode.value = ''
    console.log(CodeAsObject)
  } catch (validationError) {
    errCode.value = validationError.errors[0]
  }
  await send2FA(CodeAsObject)
}

const send2FA = async data => {
  try {
    await codeVerify2FA(data)
    console.log('response 2fa: ', response)
  } catch (error) {
    console.log('error 2fa: ', error)
  }
}
</script>
