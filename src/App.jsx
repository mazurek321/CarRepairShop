import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Login from "./Components/Login"
import Register from "./Components/Register"
import UserPanel from "./Components/UserPanel"
import AllAppointments from "./Components/AllAppointments"
import { useState } from "react"

function App() {
  const [logged, setLogged] = useState(false)
  const [userType, setUserType] = useState('user')

  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home logged={logged} userType={userType}/>}></Route>
          <Route path="/login" element={<Login logged={logged} setLogged={setLogged}/>}></Route>
          <Route path="/register" element={<Register logged={logged} setLogged={setLogged}/>}></Route>
          <Route path="/user-panel" element={<UserPanel/>}></Route>
          <Route path="/user-panel/all-appointments" element={<AllAppointments/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
