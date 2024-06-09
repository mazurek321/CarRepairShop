import React from 'react'
import Info from "./HomeComponents/Info/Info"
import Navbar from "./HomeComponents/Navbar/Navbar"
import Baner from "./HomeComponents/Baner/Baner"
import About from "./HomeComponents/About/About"
import Service from "./HomeComponents/Service/Service"
import Reviews from "./HomeComponents/Reviews/Reviews"
import MakeAppointment from "./HomeComponents/MakeAppointment/MakeAppointment"
import Footer from './HomeComponents/Footer/Footer'

const Home = ({logged, userType, setToggleRev, toggleRev, setPanelActive, homeRef, aboutRef, serviceRef, reviewsRef, contactRef, apptData, setApptData}) => {
  
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
            setPanelActive={setPanelActive}
        />

        <Baner contactRef={contactRef}/>
        
        <About aboutRef={aboutRef}/>
        <Service serviceRef={serviceRef}/>
        <Reviews reviewsRef={reviewsRef} toggleRev={toggleRev} setToggleRev={setToggleRev} />
        <MakeAppointment contactRef={contactRef} apptData={apptData} setApptData={setApptData}/>
        <Footer/>
    </>
  )
}

export default Home