import "./style.css"
import { useContext } from 'react'
import { BlackButton } from '../../components/Buttons'
import { userContext } from '../../contexts/userContext'
import ModalAdd from '../../components/ModalAdd';
import ModalRemove from "../../components/ModalRemove";
import TechSection from "../../components/TechSection";

const Home = () => {

  const { user, goOut } = useContext(userContext)

  return (
    <>
      <header>
        <h1>Kenzie Hub</h1>
        <BlackButton onClick={goOut}>Sair</BlackButton>
      </header>

      <div className='start'>
        <h2>Olá, {(user.name[0]).toUpperCase() + (user.name).slice(1)}</h2>
        <p>{user.course_module}</p>
      </div>

      <main>
        <TechSection />
      </main>

      <ModalAdd />
      <ModalRemove />
    </>
  )
}

export default Home