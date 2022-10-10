import React from 'react'
import "./style.css"
import { BlackButton, NegativePinkButton } from '../../components/Buttons'
import { Input, Select } from '../../components/Inputs'
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const RegisterPage = ({ comeBack, navigate }) => {

  const schema = yup.object().shape({
    name: yup.string().required("Campo incompleto"),
    email: yup.string().required("Campo incompleto").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, "Email inválido"),
    password: yup.string().required("Campo incompleto").matches(/^[0-9a-zA-Z$*&@#]{8,}$/, "A senha deve ter no mínimo 8 digitos"),
    passwordAgain: yup.string().oneOf([yup.ref("password"), null], "As senhas devem corresponder"),
    bio: yup.string().required("Campo incompleto"),
    contact: yup.string().required("Campo incompleto").matches(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/, "Número inválido")
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const baseUrl = "https://kenziehub.herokuapp.com"

  const submit = async data => {

    try {
      await axios.post(`${baseUrl}/users`, data)
      navigate("/")
    }
    catch (error) {
      toast.error('Email ja existente', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
    }
  }

  return (
    <>
      <div className='register_page'>

        <div className='register_logo'>
          <h1>Kenzie Hub</h1>
          <BlackButton onClick={comeBack}>Voltar</BlackButton>
        </div>

        <section className='register_box'>
          <h2>Crie sua conta</h2>
          <p>Rápido e fácil, vamos nessa</p>

          <form className='register' onSubmit={handleSubmit(submit)}>
            <label>Nome</label>
            <Input type="text" placeholder='Digite seu nome' {...register("name")} />
            <span>{errors.name?.message}</span>

            <label>Email</label>
            <Input type="text" placeholder='Digite seu email' {...register("email")} />
            <span>{errors.email?.message}</span>

            <label>Senha</label>
            <Input type="text" placeholder='Digite sua senha' {...register("password")} />
            <span>{errors.password?.message}</span>

            <label>Confirmar Senha</label>
            <Input type="text" placeholder='Confirme sua senha' {...register("passwordAgain")} />
            <span>{errors.passwordAgain?.message}</span>

            <label>Bio</label>
            <Input type="text" placeholder='Quem é você' {...register("bio")} />
            <span>{errors.bio?.message}</span>

            <label>Contato</label>
            <Input type="text" placeholder='Digite seu número' {...register("contact")} />
            <span>{errors.contact?.message}</span>

            <label>Selecionar módulo</label>
            <Select {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
              <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
              <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
              <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
            </Select>

            <NegativePinkButton type='submit'>Cadastrar</NegativePinkButton>
          </form>
        </section>
      </div>

      <ToastContainer />
    </>
  )
}

export default RegisterPage