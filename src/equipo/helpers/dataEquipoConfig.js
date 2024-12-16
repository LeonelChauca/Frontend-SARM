import modeloImg from '@assets/modelo.jpg'
import marcaImg from '@assets/marca.jpg'
import equipoImg from '@assets/equipo.jpg'

export const dataEquipoConfig = [
  {
    titulo: 'Ver Equipo',
    img: equipoImg,
    urlBoton: '/dashboard/configuracionEquipo/equipo/verequipos',
  },

  {
    titulo: 'Marcas',
    img: marcaImg,
    urlBoton: '/dashboard/configuracionEquipo/equipo/marca-equipo',
  },
  {
    titulo: 'Modelos',
    img: modeloImg,
    urlBoton: '/dashboard/configuracionEquipo/equipo/modelo-equipo',
  },
]
