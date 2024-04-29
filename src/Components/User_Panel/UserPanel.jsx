import React from 'react'
import "./UserPanel.css"
import Settings from "./Settings"
import Appointments from "./Appointments"
import { Link } from 'react-router-dom'


const UserPanel = ({userType, setToggleRev, panelActive, setPanelActive}) => {
  return (
    <div className='userPanel flex'>
      <div className="left-nav">
        <ul>
          <li className={`${panelActive==='settings'&&'active'}`} onClick={()=>{setPanelActive("settings")}}>Settings</li>
          <Link to="/"><li onClick={()=>{
            setToggleRev(true)
          }}>Add review</li></Link>

          <li className={`${panelActive==='appointments'&&'active'}`} onClick={()=>{setPanelActive("appointments")}}>Your appointments</li>
          {userType==="admin"&&<Link to="/all-appointments"><li>All appointments</li></Link>}
          <li className='logout'>Log out</li>
        </ul>
      </div>
      <div className="box">
        <p>
          <Link to="/" className='flex'>
          <span className="material-symbols-outlined">arrow_back_ios</span>
            Go back
          </Link>
        </p>
        {panelActive==="settings"?<Settings/>:<Appointments/>}
      </div>
    </div>
  )
}

export default UserPanel