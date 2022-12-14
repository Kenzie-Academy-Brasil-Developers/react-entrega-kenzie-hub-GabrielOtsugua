import "./style.css"
import { useContext } from 'react'
import { PinkButton } from '../Buttons'
import { Input, Select } from "../Inputs"
import { AiOutlineClose } from "react-icons/ai";
import ReactModal from 'react-modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { modalAddSchema } from '../../validations';
import { TechContext } from "../../contexts/techContext";

interface iErrors {
  errors: string,
  id: string,
  title: string,
  status: string
}

const ModalAdd = () => {

  ReactModal.setAppElement("#root")

  const { register, handleSubmit, formState: { errors } } = useForm<iErrors>({
    resolver: yupResolver(modalAddSchema)
  })

  const { modalAdd, handleModalAdd, addTech } = useContext(TechContext)

  return (
    <>
      <ReactModal isOpen={modalAdd} overlayClassName="modalAdd_wrapper" className="modalAdd">
        <div className="modalAdd_header">
          <h5>Cadastrar Tecnologia</h5>
          <AiOutlineClose className='closeModalAdd' onClick={handleModalAdd} />
        </div>
        <form className="modalAdd_main" onSubmit={handleSubmit(addTech)}>
          <label>Nome</label>
          <Input placeholder='Escreva o nome' {...register("title")} />
          <span>{errors.title?.message}</span>
          <label>Selecionar status</label>
          <Select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <PinkButton>Cadastrar Tecnologia</PinkButton>
        </form>
      </ReactModal>
    </>
  )
}

export default ModalAdd