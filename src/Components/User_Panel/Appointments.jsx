import React, { useState } from 'react'
import { AppointmentsData } from "./AppointmentsData"

const Appointments = () => {
  const [pages, setPages] = useState(0)

  const displayAppointments = () => {
    return AppointmentsData.slice(pages,pages+3).map((appt, index)=>(
      <div className="user-appt" key={index}>
          <div className="top flex">
            <div className="info flex">
              <span>{appt.date}</span>
              <span>{appt.time}</span>
              <span className={`${appt.status.toLocaleLowerCase()}`}>{appt.status}</span>
            </div>
            {appt.status.toLocaleLowerCase()==="comming" && <button>Decline</button>}
          </div>
          <div className="description">
            {appt.description}
          </div>
      </div>
    ))
  }

  const handlePages = (command) => {
    command==="prev"?
    <>
      {pages>0 && setPages(p=>p-=3)}
    </>:<>
      {
        pages < AppointmentsData.length-3 && setPages(p=>p+=3)
      }
    </>
  }

  return (
    <div className='appointments'>
        {displayAppointments()}
        {AppointmentsData.length>3 &&
        <div className='buttons flex'>
          <button onClick={()=>handlePages("prev")}>&lt;</button>
          <button onClick={()=>handlePages("next")}>&gt;</button>
        </div>
        }
    </div>
  )
}

export default Appointments