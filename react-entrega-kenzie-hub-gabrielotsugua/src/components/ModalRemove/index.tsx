import "./style.css"
import React, { useContext } from 'react'
import ReactModal from "react-modal"
import { Input, Select } from "../Inputs"
import { GrayButton, PinkButton } from "../Buttons"
import { AiOutlineClose } from "react-icons/ai"
import { TechContext } from "../../contexts/techContext"

const ModalRemove = () => {

  ReactModal.setAppElement("#root")

  const { modalRemove, handleModalRemove, removeTech, techToRemove } = useContext(TechContext)

  return (
    <>
      <ReactModal isOpen={modalRemove} overlayClassName="modalRemove_wrapper" className="modalRemove">
        <div className="modalRemove_header">
          <h5>Detalhes da tecnologia</h5>
          <AiOutlineClose className='closeModalRemove' onClick={() => handleModalRemove} />
        </div>
        <div className="modalRemove_main">
          <label>Nome</label>
          <Input placeholder="Tecnologia" value={techToRemove.title || ""} onChange={e => e.target.value} />
          <label>Selecionar status</label>
          <Select>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <div className="btnsContainer">
            <PinkButton className="save">Salvar alterações</PinkButton>
            <GrayButton className="remove" onClick={removeTech}>Excluir</GrayButton>
          </div>
        </div>
      </ReactModal>
    </>
  )
}

export default ModalRemove