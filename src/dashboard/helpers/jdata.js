export const dashboardPrueba = [
  {
    nombre: 'EQUIPO',
    icono: 'pi pi-users',
    rutasHijas: [
      {
        nombre: 'Listado',
        ruta: '/verequipo',
        icono: 'pi pi-list',
      },
      {
        nombre: 'Configuracion',
        ruta: '/configuracionEquipo',
        icono: ' pi pi-cog',
      },
    ],
  },
  {
    nombre: ' UNIDAD POLICIAL',
    ruta: '/unidad-policial',
    icono: 'pi pi-home',
    rutasHijas: [
      {
        nombre: 'Listado',
        ruta: '/verequipo',
        icono: 'pi pi-plus',
      },
      {
        nombre: 'Configuracion',
        ruta: ' /configuracionUPolicial',
        icono: 'pi pi-cog',
      },
    ],
  },
  {
    nombre: ' OFICIALES',
    icono: 'pi pi-user',
  },
]
