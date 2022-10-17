import "./style.css"
import React, { useContext, useEffect, useState } from 'react'
import { BlackButton } from '../../components/Buttons'
import { Context } from '../../contexts'
import { MdPostAdd } from "react-icons/md";
import ModalAdd from '../../components/ModalAdd';
import ModalRemove from "../../components/ModalRemove";

const Home = () => {

  const { user, goOut, handleModalAdd, techList, handleModalRemove } = useContext(Context)

  return (
    <>
      <header>
        <h1>Kenzie Hub</h1>
        <BlackButton onClick={goOut}>Sair</BlackButton>
      </header>

      <div className='start'>
        <h2>Olá, {user.name[0].toUpperCase() + user.name.slice(1)}</h2>
        <p>{user.course_module}</p>
      </div>

      <main>
        <div className="technologies_box">
          <div>
            <h3>Tecnologias</h3>
            <MdPostAdd className='add' onClick={handleModalAdd} />
          </div>
          <ul>
            {techList.map((tech, i) => (
              <li key={i} onClick={() => handleModalRemove(tech)}>
                <h4>{tech.title}</h4>
                <p>{tech.status}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <ModalAdd />

      <ModalRemove />
    </>
  )
}

export default Home