import React, { useRef } from 'react'
import "./Baner.css"
import baner from "../../../assets/baner.jpeg"

const Baner = ({contactRef}) => {
  const handleClick = () => {
    contactRef.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className='baner'>
        <div className="image">
            <img src={baner} alt="Main baner showing car" />
        </div>
        <div className="content container">
            <h3>Car repair shop</h3>
            <p>From routine maintenance to complex repairs, we offer a comprehensive range of services designed to meet
               all your automotive needs. Whether it's a simple oil change, brake repair, engine diagnostics, or any other
                service, we use state-of-the-art equipment and high-quality parts to deliver outstanding results. We pride
                 ourselves on our transparency, integrity, and dedication to customer satisfaction.</p>
            <button onClick={handleClick}>make appointment</button>
        </div>
    </div>
  )
}

export default Baner