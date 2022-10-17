import "./style.css"
import 'react-toastify/dist/ReactToastify.css'
import React, { useContext } from 'react'
import { Input } from '../../components/Inputs'
import { GrayButton, PinkButton } from '../../components/Buttons'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../../validations'
import { useNavigate } from "react-router-dom"
import { Context } from "../../contexts"

const LoginPage = () => {

  const { userLogin } = useContext(Context)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const navigate = useNavigate()

  return (
    <>
      <div className='login_page'>

        <div className='login_logo'>
          <h1>Kenzie Hub</h1>
        </div>

        <section className='login_box'>
          <h2>Login</h2>

          <form className='login' onSubmit={handleSubmit(userLogin)}>
            <label>Email</label>
            <Input type="text" placeholder='Digite seu email' {...register("email")} />
            <span>{errors.email?.message}</span>

            <label>Senha</label>
            <Input type="text" placeholder='Digite sua senha' {...register("password")} />
            <span>{errors.password?.message}</span>

            <PinkButton type='submit'>Entrar</PinkButton>

            <p>Ainda não possui uma conta?</p>
          </form>

          <GrayButton type='submit' onClick={() => navigate("/register")}>Cadastrar</GrayButton>
        </section>
      </div>
    </>
  )
}

export default LoginPage