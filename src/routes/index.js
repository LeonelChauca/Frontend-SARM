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
            props: true,
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
                props: true,
              },
              {
                path: 'modelo',
                name: 'modelos',
                component: () =>
                  import('../equipo/views/ConfiguracionModeloView.vue'),
                props: true,
              },
            ],
          },
          {
            path: 'equipo',
            name: 'configuracion_equipo',
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
                path: 'marca',
                name: 'marcaequipo',
                component: () =>
                  import('../equipo/views/ConfiguracionMarcaView.vue'),
              },
              {
                path: 'modelo',
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
      {
        path: 'configuracionUpolicial',
        name: 'configuracionUpolicial',
        component: () =>
          import('../u_policial/views/ConfiguracionUpolicial.vue'),
      },
      {
        path: 'listado-upolicial',
        name: 'listado-upolicial',
        component: () => import('../u_policial/views/ListadoUpolicial.vue'),
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
