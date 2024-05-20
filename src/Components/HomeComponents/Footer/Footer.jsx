import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer flex'>
        <div className="left">
            <h3>Services</h3>
            <ul>
                <li>Car exterior detailing</li>
                <li>Car interior detailing</li>
                <li>Paint correction</li>
                <li>Engine diagnostic and repair</li>
                <li>Electrical system repair</li>
                <li>Suspension and brake services</li>
            </ul>
        </div>
        <div className="middle">
            <h2>&copy;2024</h2>
        </div>
        <div className="right">
            <h3>Contact</h3>
            <ul>
                <li>
                    <span className="material-symbols-outlined">location_on</span>
                    <span>Poland, Rzeszów</span>
                 </li>
                 <li>
                    <span className="material-symbols-outlined">mail</span>
                    <span>car-repair@gmail.com</span>
                 </li>
                 <li>
                    <span className="material-symbols-outlined">call</span>
                    <span>+48 111-111-111</span>
                 </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer