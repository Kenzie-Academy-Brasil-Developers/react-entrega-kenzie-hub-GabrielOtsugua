import * as yup from "yup"

export const loginSchema = yup.object().shape({
  email: yup.string().required("Campo incompleto"),
  password: yup.string().required("Campo incompleto")
})

export const schema = yup.object().shape({
  name: yup.string().required("Campo incompleto"),
  email: yup.string().required("Campo incompleto").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, "Email inválido"),
  password: yup.string().required("Campo incompleto").matches(/^[0-9a-zA-Z$*&@#]{8,}$/, "A senha deve ter no mínimo 8 digitos"),
  passwordAgain: yup.string().oneOf([yup.ref("password"), null], "As senhas devem corresponder"),
  bio: yup.string().required("Campo incompleto"),
  contact: yup.string().required("Campo incompleto").matches(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/, "Número inválido")
})

export const modalAddSchema = yup.object().shape({
  title: yup.string().required("Campo incompleto")
})