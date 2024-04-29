import React, { useRef } from 'react'
import "./MakeAppointment.css"

const MakeAppointment = ({contactRef}) => {
    const chooseDate = () => {
        
    }

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
                            <label htmlFor="lastname">Last name*</label>
                            <input type="text" placeholder='Enter your last name here'/>
                    </div>
                </div>
                
                <label htmlFor="email">Email*</label>
                <input type="text" placeholder='Enter your email here'/>

                <label htmlFor="number">Phone number*</label>
                <input type="text" placeholder='Enter your phone number here'/>

                <label htmlFor="desc">Description</label>
                <textarea placeholder='Write your issue here (optional)'></textarea>

                <div className="date-time flex">
                    <div className="date">
                        <label htmlFor="date">Date*</label>
                        <input type="date" />
                    </div>

                    <div className="time">
                        <label htmlFor="date">Time*</label>
                        <select>
                            <option value="8:45">8:45</option>
                            <option value="12:00" className='taken' disabled>12:00</option>
                            <option value="17:15">17:15</option>
                        </select>
                    </div>
                </div>




                <div className="buttons flex">
                    <button>Submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default MakeAppointment