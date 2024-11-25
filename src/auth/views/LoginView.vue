<template>
  <div
    class="bg-secondary text-white w-full prose h-screen justify-center flex flex-col py-2 px-12"
  >
    <div class="w-full flex justify-center">
      <i
        class="pi pi-sign-in text-yellow-100"
        style="font-size: 2.5rem; font-weight: 900"
      ></i>
    </div>
    <div class="w-full">
      <h2 class="text-center text-yellow-100">Iniciar Sesion</h2>
    </div>
    <form :onsubmit="handleSubmit(onSubmit)">
      <div class="flex flex-col gap-2">
        <label for="usu_emails" class="text-sm">Correo Electronico</label>
        <InputText
          id="usu_email"
          v-model="usu_email"
          aria-describedby="username-help"
          size="small"
          placeholder="example@fcpn.edu.bo"
        />
        <small id="username-help" class="text-neutral-300">{{
          correoError
        }}</small>
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="text-sm">Contraseña</label>
        <InputText
          id="password"
          v-model="password"
          aria-describedby="username-help"
          size="small"
          placeholder="123231-sada"
        />
        <small id="username-help" class="text-neutral-300">{{
          nroEscalafonError
        }}</small>
      </div>
      <div class="w-full py-7">
        <Button
          type="submit"
          :loading="loading"
          label="Enviar"
          severity="primary"
          class="w-full"
          size="small"
          raised
        />
      </div>
    </form>
  </div>
  <DialogF2a v-model:modelValue="Activate2fa" v-model:idLog="id" />
</template>
<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { loginSchema } from '../helpers/yupValidations'
import { useForm, useField } from 'vee-validate'
import { useAuth } from '../composables/useAuth'
import DialogF2a from '../components/DialogF2a.vue'

const { response, error, loading, id, authLogin } = useAuth()
//activacion de modal
const Activate2fa = ref(false)
const { handleSubmit } = useForm({
  validationSchema: loginSchema,
})
const { value: usu_email, errorMessage: correoError } = useField('usu_email')
const { value: password, errorMessage: nroEscalafonError } =
  useField('password')

const onSubmit = async values => {
  console.log('Formulario enviado:', values)
  await authLogin(values)
  console.log('respon : ', response.value)
  if (error.value === null) {
    console.log('error es null')
    Activate2fa.value = true
  }
  console.log(Activate2fa.value)
}
</script>
