// validators/formSchema.js
import * as yup from 'yup'

export const loginSchema = yup.object({
  usu_email: yup
    .string()
    .required('Correo es obligatorio')
    .matches(
      /^[a-zA-Z0-9._%+-]+@fcpn\.edu\.bo$/,
      'El correo debe terminar en @fcpn.edu.bo',
    ),
  password: yup.string().required('Nro. de Escalafón es obligatorio'),
})

export const f2acodeSchema = yup.object({
  token: yup.string().required('Código es obligatorio'),
})
