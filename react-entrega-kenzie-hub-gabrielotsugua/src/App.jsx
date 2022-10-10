import './App.css';
import "./components/Variables/style.css"
import { Route, Routes, useNavigate } from 'react-router-dom';
import { StyleReset } from './components/StyleReset';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import React, { useState } from 'react';

function App() {

  const [user, setUser] = useState(null)

  const navigate = useNavigate()
  const goToLoginPage = () => navigate("/")
  const goToRegisterPage = () => navigate("/register")
  const comeBack = () => navigate(-1)

  return (
    <>
      <StyleReset />

      <Routes>
        <Route path="/" element={<LoginPage goToRegisterPage={goToRegisterPage} navigate={navigate} setUser={setUser} />} />
        <Route path="/register" element={<RegisterPage comeBack={comeBack} navigate={navigate} />} />
        <Route path="/home" element={<Home goToLoginPage={goToLoginPage} user={user} />} />
      </Routes>
    </>
  )
}

export default App;
