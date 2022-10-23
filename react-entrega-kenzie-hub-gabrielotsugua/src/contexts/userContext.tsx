import api from "../services/api";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iTech, iWork, TechContext } from "./techContext";

interface iContext {
  user: iUser,
  setUser: React.Dispatch<React.SetStateAction<iUser>>,
  userRegister: (user: object) => void,
  userLogin: (data: object) => void,
  goOut: () => void
}

interface iProviderProps {
  children: ReactNode
}

interface iUser {
  id: string,
  name: string,
  email: string,
  course_module: string,
  bio: string,
  contact: string,
  techs: iTech[],
  works: iWork[],
  created_at: string,
  updated_at: string,
  avatar_url: null
}

interface iUserApi {
  user: iUser,
  token: string
}

export const userContext = createContext({} as iContext)

export const Provider = ({ children }: iProviderProps) => {

  const { setTechList } = useContext(TechContext)

  const navigate = useNavigate()

  const [user, setUser] = useState<iUser>({
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

  const userRegister = async (user: object) => {
    try {
      await api.post("/users", user)
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
          const userData = await api.get<iUser>("/profile", {
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

  const userLogin = async (data: object) => {
    try {
      const res = await api.post<iUserApi>("/sessions", data)
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

  return (
    <userContext.Provider value={{ user, setUser, userRegister, userLogin, goOut }}>
      {children}
    </userContext.Provider>
  )
}