import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Login from "./Components/Login_Register/Login"
import Register from "./Components/Login_Register/Register"
import UserPanel from "./Components/User_Panel/UserPanel"
import AllAppointments from "./Components/User_Panel/AllAppointments"
import { useState, useRef } from "react"

function App() {
  const [logged, setLogged] = useState(false)
  const [userType, setUserType] = useState('admin')

  const [panelActive, setPanelActive] = useState("settings")
  const [toggleRev, setToggleRev] = useState(false)
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const serviceRef = useRef(null)
  const reviewsRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <div className="main">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home logged={logged} 
                                         userType={userType} 
                                         setPanelActive={setPanelActive}
                                         homeRef={homeRef}
                                         aboutRef={aboutRef}
                                         serviceRef={serviceRef}
                                         reviewsRef={reviewsRef}
                                         contactRef={contactRef}
                                         setToggleRev={setToggleRev}
                                         toggleRev={toggleRev}
                                         />}></Route>
          <Route path="login" element={<Login logged={logged} setLogged={setLogged}/>}></Route>
          <Route path="register" element={<Register logged={logged} setLogged={setLogged}/>}></Route>
          <Route path="user-panel" element={<UserPanel userType={userType} 
                                                       panelActive={panelActive} 
                                                       setPanelActive={setPanelActive} 
                                                       contactRef={contactRef}
                                                       setToggleRev={setToggleRev}/>}></Route>
          <Route path="all-appointments" element={<AllAppointments/>}></Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
