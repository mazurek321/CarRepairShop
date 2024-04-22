import React, { useRef } from 'react'
import "./MakeAppointment.css"

const MakeAppointment = ({contactRef}) => {
  return (
    <div className='make-appt container' ref={contactRef}>
        <h3 className='header'>Make Appointment</h3>
        
        <form className='styled'>
            <div className="form-content flex">
                <div className="name-info flex">
                    <div className="name flex">
                        <label htmlFor="name">Name*</label>
                        <input type="text" placeholder='Enter your name here'/>
                    </div>
                    <div className="last-name flex">
                            <label htmlFor="name">Last name*</label>
                            <input type="text" placeholder='Enter your last name here'/>
                    </div>
                </div>
                
                <label htmlFor="name">Email*</label>
                <input type="text" placeholder='Enter your email here'/>

                <label htmlFor="name">Phone number*</label>
                <input type="text" placeholder='Enter your phone number here'/>

                <label htmlFor="name">Description</label>
                <textarea placeholder='Write your issue here (optional)'></textarea>

                <div className="buttons flex">
                    <button>Choose a date*</button>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default MakeAppointment