import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../auth/layout/LoginLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('../auth/views/LoginView.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../dashboard/views/DashboardView.vue'),
    children: [
      {
        path: 'verequipo',
        name: 'equipo',
        component: () => import('../equipo/layout/EquipoLayout.vue'),
      },
      {
        path: 'configuracionEquipo',
        name: 'configuracionEquipo',
        component: () => import('../equipo/views/ConfiguracionEquipoView.vue'),
        children: [
          {
            path: 'armas',
            name: 'armas',
            component: () =>
              import('../equipo/views/ConfiguracionArmaView.vue'),
          },
          {
            path: 'equipos',
            name: 'equipos',
            component: () =>
              import('../equipo/views/ConfiguracionEquipoView.vue'),
          },
          {
            path: 'marca',
            name: 'marca',
            component: () =>
              import('../equipo/views/ConfiguracionMarcaView.vue'),
          },
          {
            path: 'modelos',
            name: 'modelos',
            component: () =>
              import('../equipo/views/ConfiguracionModeloView.vue'),
          },
        ],
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
