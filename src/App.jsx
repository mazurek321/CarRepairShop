import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Login from "./Components/Login_Register/Login"
import Register from "./Components/Login_Register/Register"
import UserPanel from "./Components/User_Panel/UserPanel"
import AllAppointments from "./Components/User_Panel/AllAppointments"
import { useState } from "react"

function App() {
  const [logged, setLogged] = useState(true)
  const [userType, setUserType] = useState('admin')

  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/CarRepairShop/" element={<Home logged={logged} userType={userType}/>}></Route>
          <Route path="login" element={<Login logged={logged} setLogged={setLogged}/>}></Route>
          <Route path="register" element={<Register logged={logged} setLogged={setLogged}/>}></Route>
          <Route path="user-panel" element={<UserPanel/>}></Route>
          <Route path="all-appointments" element={<AllAppointments/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
