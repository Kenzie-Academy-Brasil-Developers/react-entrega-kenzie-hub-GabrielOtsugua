import React from 'react'
import "./style.css"
import { Input } from '../../components/Inputs'
import { GrayButton, PinkButton } from '../../components/Buttons'
import * as yup from "yup"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const LoginPage = ({ goToRegisterPage, navigate, setUser }) => {

  const schema = yup.object().shape({
    email: yup.string().required("Campo incompleto").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, "Email inválido"),
    password: yup.string().required("Campo incompleto").matches(/^[0-9a-zA-Z$*&@#]{8,}$/, "A senha deve ter no mínimo 8 digitos")
  })
  
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const baseUrl = "https://kenziehub.herokuapp.com"

  const submit = async data => {

    try {
      const response = await axios.post(`${baseUrl}/sessions`, data)
      setUser(response.data.user)
      localStorage.setItem("user", JSON.stringify(response.data.user))
      navigate("/home")
    } 
    catch (error) {
      toast.error('Usuário não encontrado', {
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
      <div className='login_page'>

        <div className='login_logo'>
          <h1>Kenzie Hub</h1>
        </div>

        <section className='login_box'>
          <h2>Login</h2>

          <form className='login' onSubmit={handleSubmit(submit)}>
            <label>Email</label>
            <Input type="text" placeholder='Digite seu email' {...register("email")} />
            <span>{errors.email?.message}</span>

            <label>Senha</label>
            <Input type="text" placeholder='Digite sua senha' {...register("password")} />
            <span>{errors.password?.message}</span>

            <PinkButton type='submit'>Entrar</PinkButton>

            <p>Ainda não possui uma conta?</p>
          </form>

          <GrayButton type='submit' onClick={goToRegisterPage}>Cadastrar</GrayButton>
        </section>
      </div>

      <ToastContainer />
    </>
  )
}

export default LoginPage