import React, { createContext, ReactNode, useState } from 'react'
import api from '../services/api'

export interface iTechContext {
  techList: iTech[],
  setTechList: React.Dispatch<React.SetStateAction<iTech[]>>,
  modalAdd: boolean,
  setModalAdd: React.Dispatch<React.SetStateAction<boolean>>,
  modalRemove: boolean,
  setModalRemove: React.Dispatch<React.SetStateAction<boolean>>,
  techToRemove: iTech,
  setTechToRemove: React.Dispatch<React.SetStateAction<iTech>>,
  handleModalAdd: () => void,
  addTech: (tech: iTech) => void,
  handleModalRemove: (tech: iTech) => void,
  removeTech: () => void
}

interface iTechContextProviderProps {
  children: ReactNode
}

export interface iTech {
  id: string,
  title: string,
  status: string
}

export interface iWork {
  title: string, 
  description: string,
  deploy_url: string
}

export const TechContext = createContext({} as iTechContext)

export const TechContextProvider = ({ children }: iTechContextProviderProps) => {

  const [techList, setTechList] = useState([] as iTech[])
  const [modalAdd, setModalAdd] = useState(false)
  const [modalRemove, setModalRemove] = useState(false)
  const [techToRemove, setTechToRemove] = useState<iTech>({
    id: "...",
    title: "...",
    status: "..."
  })

  const handleModalAdd = () => setModalAdd(!modalAdd)

  const addTech = async (tech: iTech) => {
    const res = await api.post("/users/techs", tech, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    setTechList([...techList, res.data])
    setModalAdd(false)
  }

  const handleModalRemove = (tech: iTech) => {
    setModalRemove(!modalRemove)
    setTechToRemove(tech)
  }

  const removeTech = async () => {
    const newTechList = techList.filter(technology => technology !== techToRemove)
    await api.delete(`/users/techs/${techToRemove.id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    setTechList(newTechList)
    setModalRemove(false)
  }

  return (
    <TechContext.Provider value={{
      techList, setTechList, modalAdd, setModalAdd,
      handleModalAdd, addTech, modalRemove, setModalRemove, techToRemove,
      setTechToRemove, handleModalRemove, removeTech
    }}>
      {children}
    </TechContext.Provider>
  )
}