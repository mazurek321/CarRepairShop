import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer flex'>
        <div className="left">
            <h3>Services</h3>
            <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
                <li>Service 4</li>
                <li>Service 5</li>
                <li>Service 6</li>
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