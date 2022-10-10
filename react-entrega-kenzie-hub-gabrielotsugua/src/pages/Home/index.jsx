import React from 'react'
import { BlackButton } from '../../components/Buttons'
import "./style.css"

const Home = ({ goToLoginPage }) => {

  const user = JSON.parse(localStorage.getItem("user"))
  
  return (
    <>
      <header>
        <h1>Kenzie Hub</h1>
        <BlackButton onClick={goToLoginPage}>Sair</BlackButton>
      </header>

      <div className='start'>
        <h2>Olá, {(user.name[0]).toUpperCase() + (user.name).slice(1)}</h2>
        <p>{user.course_module}</p>
      </div>

      <main>
        <h3>Que pena! Estamos em desenvolvimento :(</h3>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </main>
    </>
  )
}

export default Home