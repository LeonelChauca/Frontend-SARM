import { toast } from 'vue-sonner'

export const showToast = message => {
  toast.success(message)
}

export const showError = message => {
  toast.error(message)
}
