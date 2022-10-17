import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const Context = createContext({})

export const Provider = ({ children }) => {
  
  const navigate = useNavigate()

  const [user, setUser] = useState({
    id: "...",
    name: "...",
    email: "...",
    course_module: "...",
    bio: "...",
    contact: "...",
    techs: [],
    works: [],
    created_at: "...",
    updated_at: "...",
    avatar_url: null
  })

  const [techList, setTechList] = useState([])

  const userRegister = async user => {
    try {
      const res = await api.post("/users", user)
      navigate("/")
    } catch (err) {
      toast.error("Email já existente", {
        theme: "dark",
        autoClose: 3000
      })
    }
  }

  useEffect(() => {
    (async () => {
      if (localStorage.getItem("token")) {
        try {
          const userData = await api.get("/profile", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
          })
          setUser(userData.data)
          setTechList(userData.data.techs)
        }
        catch (error) {
          navigate("/")
        }
      }
      else {
        navigate("/")
      }
    })()
  }, [])

  const userLogin = async data => {
    try {
      const res = await api.post("/sessions", data)
      localStorage.setItem("token", res.data.token)
      setUser(res.data.user)
      setTechList(res.data.user.techs)
      navigate("/home")
    } catch (err) {
      toast.error("Usuário não encontrado", {
        theme: "dark",
        autoClose: 3000
      })
    }
  }

  const goOut = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  const [modalAdd, setModalAdd] = useState(false)
  
  const handleModalAdd = () => setModalAdd(!modalAdd)
  
  const addTech = async tech => {
    const res = await api.post("/users/techs", tech, {
      headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
    })
    setTechList([...techList, res.data])
    handleModalAdd(false)
  }

  const [modalRemove, setModalRemove] = useState(false)
  const [techToRemove, setTechToRemove] = useState({
    title: "...",
    stutus: "..."
  })

  const handleModalRemove = tech => {
    setModalRemove(!modalRemove)
    setTechToRemove(tech)
  }
  
  const removeTech = async () => {
    const newTechList = techList.filter(technology => technology !== techToRemove)
    const res = await api.delete(`/users/techs/${techToRemove.id}`, {
      headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
    })
    setTechList(newTechList)
    setModalRemove(false)
  }

  return (
    <Context.Provider value={{ userRegister, userLogin, user, goOut, 
    modalAdd, handleModalAdd, addTech, techList, modalRemove, handleModalRemove, 
    removeTech, techToRemove, setTechToRemove }}>
      {children}
    </Context.Provider>
  )
}