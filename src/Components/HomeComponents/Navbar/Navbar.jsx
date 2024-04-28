import React, { useEffect, useRef, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [userToggle, setUserToggle] = useState(false)
  let y = 0;
  let nav_box = useRef()

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
    setToggle(!toggle)
  }

  const handleButton = () =>{
    handleClick(props.reviewsRef)
    props.setToggleRev(true)
  }

  const handlePanelSet = (panel) => {
    props.setPanelActive(panel)
  }

  return (
    <nav className='container flex'>
        <span className="material-symbols-outlined menu-icon" onClick={()=>{setToggle(t=>t=!t)}}>menu</span>

        <div className={`nav-content flex ${toggle?"show":""}`}>
          <div className="logo flex side">
              <div className="img"></div>
              <h3>Car repair</h3>
          </div>
          <ul className='flex styled'>
              <li onClick={() => handleClick(props.homeRef)} className={`${active==="home"?"active":""}`}>Homepage</li>
              <li onClick={() => handleClick(props.aboutRef)} className={`${active==="about"?"active":""}`}>About</li>
              <li onClick={() => handleClick(props.serviceRef)} className={`${active==="service"?"active":""}`}>Service</li>
              <li onClick={() => handleClick(props.reviewsRef)} className={`${active==="reviews"?"active":""}`}>Reviews</li>
              <li onClick={() => handleClick(props.contactRef)} className={`${active==="contact"?"active":""}`}>Contact</li>
          </ul>  
        </div>


        <div className="login-nav side">
            {props.logged ? 
              <div className='flex' 
                 onClick={()=>{setUserToggle(u=>u=!u)}}> 
                 <span>UserName UserLastName</span>
                 <span className=
                        {`material-symbols-outlined icon ${userToggle&&"rotated"}`}>
                        expand_more
                  </span>

                  <div className={`user-panel ${userToggle&& 'show'}`} ref={nav_box}>
                    <ul>
                      <Link to="/user-panel"><li onClick={()=>{handlePanelSet("settings")}}><span className="material-symbols-outlined icon">settings</span>Settings</li></Link>
                      <li onClick={()=>{handleButton()}}><span className="material-symbols-outlined icon">rate_review</span>Add review</li>
                      <li onClick={()=>{handleClick(props.contactRef)}}><span className="material-symbols-outlined icon">edit_calendar</span>Make appointment</li>
                      <Link to="/user-panel"><li onClick={()=>{handlePanelSet("appointments")}}><span className="material-symbols-outlined icon">event</span>Your appointments</li></Link>
                      {props.userType==="admin"?<Link to="/all-appointments"><li className='all_appt'><span className="material-symbols-outlined icon">calendar_month</span>All appointments</li></Link>:""}
                      <li className='logout'><span className="material-symbols-outlined icon">logout</span>Log out</li>
                    </ul>
                  </div>
              </div> 
              : 
              <Link to="login"><button>Log in</button></Link>
            }
          </div>
    </nav>
  )
}

export default Navbar