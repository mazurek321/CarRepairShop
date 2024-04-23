import React, { useRef, useState } from 'react'
import Info from "./HomeComponents/Info/Info"
import Navbar from "./HomeComponents/Navbar/Navbar"
import Baner from "./HomeComponents/Baner/Baner"
import About from "./HomeComponents/About/About"
import Service from "./HomeComponents/Service/Service"
import Reviews from "./HomeComponents/Reviews/Reviews"
import MakeAppointment from "./HomeComponents/MakeAppointment/MakeAppointment"

const Home = ({logged, userType}) => {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const serviceRef = useRef(null)
  const reviewsRef = useRef(null)
  const contactRef = useRef(null)

  const [toggleRev, setToggleRev] = useState(false)

  return (
    <>
        <Info homeRef={homeRef} />

        <Navbar 
            homeRef={homeRef}
            aboutRef={aboutRef}
            serviceRef={serviceRef}
            reviewsRef={reviewsRef}
            contactRef={contactRef}
            logged={logged} 
            setToggleRev={setToggleRev}
            userType={userType}
        />

        <Baner contactRef={contactRef}/>
        
        <About aboutRef={aboutRef}/>
        <Service serviceRef={serviceRef}/>
        <Reviews reviewsRef={reviewsRef} toggleRev={toggleRev} setToggleRev={setToggleRev}/>
        <MakeAppointment contactRef={contactRef}/>
    </>
  )
}

export default Home