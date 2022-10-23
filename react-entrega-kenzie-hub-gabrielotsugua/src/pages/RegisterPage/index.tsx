import "./style.css"
import 'react-toastify/dist/ReactToastify.css'
import { BlackButton } from '../../components/Buttons'
import { useNavigate } from "react-router-dom"
import RegisterForm from "../../components/RegisterForm"

const RegisterPage = () => {

  const navigate = useNavigate()

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

          <RegisterForm />
        </section>
      </div>
    </>
  )
}

export default RegisterPage