import "./style.css"
import 'react-toastify/dist/ReactToastify.css'
import { GrayButton } from '../../components/Buttons'
import { useNavigate } from "react-router-dom"
import LoginForm from "../../components/LoginForm"

const LoginPage = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className='login_page'>
        <div className='login_logo'>
          <h1>Kenzie Hub</h1>
        </div>

        <section className='login_box'>
          <h2>Login</h2>
          <LoginForm />
          <GrayButton type='submit' onClick={() => navigate("/register")}>Cadastrar</GrayButton>
        </section>
      </div>
    </>
  )
}

export default LoginPage