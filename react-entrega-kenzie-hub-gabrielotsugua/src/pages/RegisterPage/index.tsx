import "./style.css"
import 'react-toastify/dist/ReactToastify.css'
import { useContext } from 'react'
import { BlackButton, NegativePinkButton } from '../../components/Buttons'
import { Input, Select } from '../../components/Inputs'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from '../../validations'
import { useNavigate } from "react-router-dom"
import { Context } from "../../contexts/userContext"

interface iErrors {
  name: string,
  email: string,
  password: string | number,
  passwordAgain: string | number,
  bio: string,
  contact: number,
  course_module: string
}

const RegisterPage = () => {

  const navigate = useNavigate()
  const { userRegister } = useContext(Context)

  const { register, handleSubmit, formState: { errors } } = useForm<iErrors>({
    resolver: yupResolver(schema)
  })

  return (
    <>
      <div className='register_page'>

        <div className='register_logo'>
          <h1>Kenzie Hub</h1>
          <BlackButton onClick={() => navigate(-1)}>Voltar</BlackButton>
        </div>

        <section className='register_box'>
          <h2>Crie sua conta</h2>
          <p>Rápido e fácil, vamos nessa</p>

          <form className='register' onSubmit={handleSubmit(userRegister)}>
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
    </>
  )
}

export default RegisterPage