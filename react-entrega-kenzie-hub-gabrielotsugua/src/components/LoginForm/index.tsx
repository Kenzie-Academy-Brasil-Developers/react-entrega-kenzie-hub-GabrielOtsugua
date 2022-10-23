import "./style.css"
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { userContext } from '../../contexts/userContext'
import { loginSchema } from '../../validations'
import { PinkButton } from '../Buttons'
import { Input } from '../Inputs'

interface iErrors {
  email: string,
  password: string | number
}

const LoginForm = () => {

  const { userLogin } = useContext(userContext)

  const { register, handleSubmit, formState: { errors } } = useForm<iErrors>({
    resolver: yupResolver(loginSchema)
  })

  return (
    <>
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
    </>
  )
}

export default LoginForm