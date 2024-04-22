import React from 'react'
import "./Info.css"

const Info = ({homeRef}) => {
  return (
    <div className='info container flex' ref={homeRef}>
        <div className="left">
            <p className='flex'>
                <span className="material-symbols-outlined">location_on</span>
                <span>Poland, Rzeszów</span>    
            </p>
        </div>
        <div className="right flex">
            <p className='flex'>
                <span className="material-symbols-outlined">mail</span>
                <span>car-repair@gmail.com</span>    
            </p>
            <p className='flex'>
                <span className="material-symbols-outlined">call</span>
                <span>+48 111-111-111</span>
            </p>
        </div>
    </div>
  )
}

export default Info