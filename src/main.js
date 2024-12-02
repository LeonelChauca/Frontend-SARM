import './assets/main.css'
import 'primeicons/primeicons.css' // Solo una vez

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'
import DialogService from 'primevue/dialogservice'

import Ripple from 'primevue/ripple'
import StyleClass from 'primevue/styleclass'
import { router } from './routes/index'

import Saga from '@primevue/themes/material'
import './styles/custom-color.css'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Saga,
    options: {
      prefix: 'p',
      darkModeSelector: '.p-dark',
      cssLayer: false,
    },
  },
  locale: {
    firstDayOfWeek: 1,
    dayNames: [
      'domingo',
      'lunes',
      'martes',
      'miércoles',
      'jueves',
      'viernes',
      'sábado',
    ],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ],
    monthNamesShort: [
      'ene',
      'feb',
      'mar',
      'abr',
      'may',
      'jun',
      'jul',
      'ago',
      'sep',
      'oct',
      'nov',
      'dic',
    ],
    today: 'Hoy',
    clear: 'Limpiar',
  },
  ripple: true,
})
app.directive('ripple', Ripple)
app.directive('styleclass', StyleClass)
app.use(ConfirmationService)
app.use(ToastService)
app.use(DialogService)

app.use(router)

app.mount('#app')
