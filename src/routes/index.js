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
        path: 'configuracionEquipo',
        name: 'configuracionEquipo',
        component: () =>
          import('../equipo/views/DashboardConfiguracionView.vue'),
        children: [
          {
            path: 'arma',
            name: 'arma',
            component: () => import('../equipo/layout/ConfArmamentoLayout.vue'),
            children: [
              {
                path: 'verarmas',
                name: 'verarmas',
                component: () =>
                  import('../equipo/views/ConfiguracionArmaView.vue'),
              },
              {
                path: 'marca',
                name: 'marca',
                component: () =>
                  import('../equipo/views/ConfiguracionMarcaView.vue'),
              },
              {
                path: 'modelo',
                name: 'modelos',
                component: () =>
                  import('../equipo/views/ConfiguracionModeloView.vue'),
              },
            ],
          },
          {
            path: 'equipo',
            name: 'equipo',
            component: () =>
              import('../equipo/layout/ConfEquipamientoLayout.vue'),
            children: [
              {
                path: 'verequipos',
                name: 'verequipos',
                component: () =>
                  import('../equipo/views/ConfiguracionEquipoView.vue'),
              },
              {
                path: 'marca-equipo',
                name: 'marcaequipo',
                component: () =>
                  import('../equipo/views/ConfiguracionMarcaView.vue'),
              },
              {
                path: 'modelo-equipo',
                name: 'modeloequipo',
                component: () =>
                  import('../equipo/views/ConfiguracionModeloView.vue'),
              },
            ],
          },

          // {
          //   path: 'configuracion',
          //   name: 'config-equipo',
          //   component: () =>
          //     import('../equipo/views/DashboardConfiguracionView.vue'),
          // },
        ],
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
